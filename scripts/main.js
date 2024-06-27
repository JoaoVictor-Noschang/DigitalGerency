const btnCadastro = document.querySelector("#btn-cadastro");
const btnRelatorio = document.querySelector("#btn-relatorio");
const btnCalendario = document.querySelector("#btn-calendario");

btnCadastro.addEventListener("click", () => {
    window.location.assign("../pages/cadastro.html");
});

btnRelatorio.addEventListener("click", () => {
    window.location.assign("../pages/relatorio.html");
});

btnCalendario.addEventListener("click", () => {
    window.location.assign("../pages/calendario.html");
});