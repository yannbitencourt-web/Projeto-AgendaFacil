(() => {
    const form = document.querySelector('#bookingForm');
    const error = document.querySelector('#bookingError');

    const PROXIMA_PAGINA = '../pages/data.html';

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const selectedService = form.querySelector(
            'input[name="service"]:checked'
        );

        if (!selectedService) {
            error.hidden = false;

            const primeiroServico = form.querySelector(
                'input[name="service"]'
            );

            if (primeiroServico) {
                primeiroServico.focus();
            }

            return;
        }

        error.hidden = true;

   
        localStorage.setItem(
            'servico',
            selectedService.value
        );

       
        window.location.href = PROXIMA_PAGINA;
    });
})();