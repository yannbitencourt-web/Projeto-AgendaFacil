(() => {
  const form = document.querySelector('#bookingForm');
  const error = document.querySelector('#bookingError');

  // Configure aqui o endereço da próxima página quando ela estiver disponível, irvin seu boçal
  const PROXIMA_PAGINA = ''; // Exemplo: '../pages/pncirvinfazlogoissoai.html'

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const selectedService = form.querySelector('input[name="service"]:checked');

    if (!selectedService) {
      error.hidden = false;
      form.querySelector('input[name="service"]').focus();
      return;
    }

    error.hidden = true;
    if (PROXIMA_PAGINA) {
      window.location.href = PROXIMA_PAGINA;
    }
  });
})();
