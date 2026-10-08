const formulario = document.getElementById("formulario");
const data = document.getElementById("data");
const horario = document.getElementById("horario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    if (data.value === "") {
        alert("Escolha uma data!");
        return;
    }

    localStorage.setItem("dataEscolhida", data.value);
    localStorage.setItem("horarioEscolhido", horario.value);

  
    window.location.href = "confirmacao.html";
});