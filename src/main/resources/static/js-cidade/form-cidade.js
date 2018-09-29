var date = new Date(1538233200*1000);
console.log(date);

buscarCidadesWS(aoBuscarCidades);

function adicionarCidadeTabela(cidade) {
    var cidadeTr = montaTr(cidade);

    var tabela = document.querySelector("#tabela-cidades");
    tabela.appendChild(cidadeTr);
}

function montaTr(cidade) {
    var cidadeTr = document.createElement("tr");
    cidadeTr.classList.add("cidade");

    cidadeTr.appendChild(montaTd(cidade.id, "info-id"));
    cidadeTr.appendChild(montaTd(cidade.nome, "info-nome"));
    cidadeTr.appendChild(criarTdExcluir());

    return cidadeTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function aoBuscarCidades() {
    if (validarStatus(this)) {
        var cidades = JSON.parse(this.responseText);
        
        cidades.forEach(cidade => {
            adicionarCidadeTabela(cidade);
        });
    }
}

function criarTdExcluir() {
    var td = document.createElement("td");
    td.appendChild(criarBtPrevisao());
    td.appendChild(criarBtExcluir());
    return td;
}

function criarBtPrevisao() {
    var button = document.createElement("button");
    button.textContent = 'Previsão';
    button.classList.add('bt');
    button.classList.add('bt-previsao');
    button.addEventListener("click", clickBtnPrevisao);    
    return button;
}

function clickBtnPrevisao(event) {
    event.preventDefault();

    var td = event.target.parentNode;
    var tr = td.parentNode;

    if (tr.tagName == "TR") {
        var nomeCidade = tr.querySelector(".info-nome").textContent;

        console.log(nomeCidade);

        var url = "http://localhost:8080/previsao.html?cidade=";
        window.open(url + nomeCidade);  
    }
}

function mostrarMensagemErro(erro) {
    var ul = document.querySelector("#mensagens-erro");

    var linha = document.createElement("li");
    linha.textContent = erro;

    ul.appendChild(linha);
}