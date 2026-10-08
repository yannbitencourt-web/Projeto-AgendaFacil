document.addEventListener("DOMContentLoaded", function () {

    const confirmarBtn = document.getElementById("confirmarBtn");
    const alterarBtn = document.getElementById("alterarBtn");
    const mensagem = document.getElementById("mensagem");

    const servico = localStorage.getItem("servico");
    const profissional = localStorage.getItem("profissional");


    const data = localStorage.getItem("dataEscolhida");
    const horario = localStorage.getItem("horarioEscolhido");

    if (servico) {
        document.getElementById("servico").textContent = servico;
    }

    if (profissional) {
        document.getElementById("profissional").textContent = profissional;
    }

    if (data) {
        document.getElementById("data").textContent = data;
    }

    if (horario) {
        document.getElementById("horario").textContent = horario;
    }

    alterarBtn.addEventListener("click", function () {
        history.back();
    });

    confirmarBtn.addEventListener("click", function () {

        localStorage.setItem("agendamentoConfirmado", "true");

        mensagem.textContent = "Agendamento confirmado com sucesso!";

        confirmarBtn.textContent = "Agendamento confirmado";

        confirmarBtn.disabled = true;

        confirmarBtn.style.opacity = "0.7";
        confirmarBtn.style.cursor = "default";

        window.location.href = "resultado.html";

    });

});