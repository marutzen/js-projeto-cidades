let urlParams = new URLSearchParams(window.location.search);

if (urlParams.has('cidade')) {
    let paramCidade = urlParams.get('cidade');

    var titulo = document.querySelector("#titulo");
    titulo.textContent = "Previsão do tempo para " + paramCidade;

    buscarPrevisao(paramCidade, 5);
}

function buscarPrevisao(cidade, qtdDias) {
    buscarPrevisaoWS(cidade, qtdDias, aoCarregarPrevisao);
}

function aoCarregarPrevisao() {
    if (validarStatus(this)) {
        var previsoes = JSON.parse(this.responseText);
    
        previsoes.list.forEach(previsao => {
            console.log(new Date(previsao.dt));
            adicionarPrevisaoTabela(previsao);
        });
    }
}

function adicionarPrevisaoTabela(previsao) {
    var previsaoTr = montaTr(previsao);

    var tabela = document.querySelector("#tabela-previsao");
    tabela.appendChild(previsaoTr);
}

function montaTr(previsao) {
    var previsaoTr = document.createElement("tr");
    previsaoTr.classList.add("previsao-dia");

    previsaoTr.appendChild(montaTd(getDia(previsao), "info-dia"));
    previsaoTr.appendChild(montaTd(getDiaSemana(previsao), "info-dia-semana"));
    previsaoTr.appendChild(montaTd(previsao.temp.day + " °C", "info-temp"));
    previsaoTr.appendChild(montaTd(previsao.temp.max + " °C", "info-temp-max"));
    previsaoTr.appendChild(montaTd(previsao.temp.min + " °C", "info-temp-min"));
    previsaoTr.appendChild(montaTd(previsao.humidity + "%", "info-humidity"));

    return previsaoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function getDia(previsao) {
    return getDataConvertida(previsao.dt).getDate();
}

function getDiaSemana(previsao) {
    var dias = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    var data = getDataConvertida(previsao.dt);

    return dias[data.getDay()];
}

function getDataConvertida(data) {
    return new Date(data*1000);
}