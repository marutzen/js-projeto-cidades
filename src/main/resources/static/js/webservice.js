function buscarCidadesWS(eventoAoBuscar) {
    chamadaGET(eventoAoBuscar, "http://localhost:8080/api/buscar");
}

function excluirCidadeWS(id, eventoAoExcluir) {
    var url = "http://localhost:8080/api/excluir/" + id;

    chamadaGET(eventoAoExcluir, url);
}

function gravarCidadeWS(nome, eventoAoGravar) {
    var cidade = {
        "nome": nome 
    };

    var jsonCidade = JSON.stringify(cidade);

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", eventoAoGravar);
    xhr.open("POST", "http://localhost:8080/api/gravar");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(jsonCidade);
}

function buscarPrevisaoWS(cidade, qtdDias, eventoAoCarregar) {
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?";

    url = url + "q=" + cidade;
    url = url + "&mode=json";
    url = url + "&cnt=" + qtdDias;
    url = url + "&units=metric";
    url = url + "&APPID=eb8b1a9405e659b2ffc78f0a520b1a46";

    chamadaGET(eventoAoCarregar, url);
}

function chamadaGET(eventoOnLoad, url) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", eventoOnLoad);
    xhr.open("GET", url);
    xhr.send();
}

function validarStatus(req) {
    if (req.status != 200) {
        console.log("Status: " + req.status);
        console.log("Mensagem: " + req.responseText);
        return false;
    }

    return true;
}