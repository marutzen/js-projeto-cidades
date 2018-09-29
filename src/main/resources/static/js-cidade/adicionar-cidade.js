var btAdicionar = document.querySelector("#adicionar-cidade");

btAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    var nomeCidade = document.querySelector("#cidade").value;

    buscarPrevisaoWS(nomeCidade, 1, aoValidarCidadePrevisao);
});

function aoValidarCidadePrevisao() {
    var nomeCidade = document.querySelector("#cidade").value;

    if (validarStatus(this)) {
        gravarCidadeWS(nomeCidade, aoGravarCidade);
    } else {
        var resposta = JSON.parse(this.responseText);

        if (resposta.cod == "404") {
            mostrarMensagemErro("Cidade não encontrada ou inválida!");
        } else {
            mostrarMensagemErro("Ocorreu um erro ao validar a cidade: ");
            mostrarMensagemErro("Status: " + resposta.cod);
            mostrarMensagemErro("Mensagem: " + resposta.message);
        }
    }
}

function aoGravarCidade() {
    if (validarStatus(this)) {
        var cidade = JSON.parse(this.responseText);
        
        adicionarCidadeTabela(cidade);

        document.querySelector("#form-adiciona").reset();
    } else {
        var resposta = JSON.parse(this.responseText);

        mostrarMensagemErro("Ocorreu um erro ao gravar a cidade!");
    }
}

        