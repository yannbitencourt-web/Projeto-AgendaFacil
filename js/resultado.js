document.addEventListener("DOMContentLoaded", function () {
    const numeroProtocolo = document.getElementById("numeroProtocolo");
    const botaoAgendamentos = document.getElementById("btnAgendamentos");
    const mensagem = document.getElementById("mensagemAgendamentos");

    // Usa o protocolo gerado ao confirmar; cria um somente se a página for aberta diretamente.
    let protocolo = localStorage.getItem("numeroProtocolo");
    if (!protocolo) {
        protocolo = String(Math.floor(10000 + Math.random() * 90000));
        localStorage.setItem("numeroProtocolo", protocolo);
    }
    numeroProtocolo.textContent = protocolo;

    botaoAgendamentos.addEventListener("click", function () {
        // A listagem de agendamentos ainda não existe no projeto.
        mensagem.textContent = "A área de agendamentos ainda está em desenvolvimento. Guarde seu protocolo: " + protocolo + ".";
        mensagem.hidden = false;
    });
});
