(() => {
  const form = document.querySelector('#loginForm');
  const email = document.querySelector('#loginEmail');
  const password = document.querySelector('#loginPassword');
  const error = document.querySelector('#loginError');
  const status = document.querySelector('#loginStatus');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.hidden = true;
    const validEmail = email.validity.valid && email.value.trim().length > 0;
    const validPassword = password.value.trim().length > 0;
    if (!validEmail || !validPassword) {
      error.textContent = !validEmail ? 'Informe um e-mail válido.' : 'Informe sua senha.';
      error.hidden = false;
      (validEmail ? password : email).focus();
      return;
    }
    window.location.href = 'agendar-servico.html';
  });
})();
