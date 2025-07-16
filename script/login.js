document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-login');
  const mensaje = document.getElementById('mensaje');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!usuario || !password) {
      mensaje.style.color = 'red';
      mensaje.textContent = 'Por favor completá los dos campos.';
      return;
    }

    const registrado = JSON.parse(localStorage.getItem('usuario'));

    if (!registrado) {
      // Si no hay usuario, lo registramos
      localStorage.setItem('usuario', JSON.stringify({ usuario, password }));
      mensaje.style.color = 'green';
      mensaje.textContent = `¡Registrado y logueado como ${usuario}!`;
      actualizarHeader(usuario);
    } else if (registrado.usuario === usuario && registrado.password === password) {
      // Si coincide con lo registrado
      mensaje.style.color = 'green';
      mensaje.textContent = `¡Bienvenido nuevamente, ${usuario}!`;
      actualizarHeader(usuario);
    } else {
      mensaje.style.color = 'red';
      mensaje.textContent = 'Usuario o contraseña incorrectos.';
    }
  });

  function actualizarHeader(usuario) {
    localStorage.setItem('logueado', usuario);
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  }
});
