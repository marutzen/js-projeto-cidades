function criarBtExcluir() {
    var button = document.createElement("button");
    button.textContent = 'Excluir';
    button.classList.add('bt');
    button.classList.add('bt-excluir');
    button.addEventListener("click", clickBtnExcluir);    
    return button;
}

function clickBtnExcluir(event) {
    event.preventDefault();

    var td = event.target.parentNode;
    var tr = td.parentNode;

    if (tr.tagName == "TR") {
        var idCidade = tr.querySelector(".info-id").textContent;
        excluirCidadeWS(idCidade, eventoAoExcluir);

        tr.classList.add("fadeOut");

        setTimeout(function() {
            tr.remove();
        }, 500);
    }
}

function eventoAoExcluir() {
    validarStatus(this);
}