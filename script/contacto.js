document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contacto');
  const resultado = document.getElementById('resultado');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      resultado.style.color = 'red';
      resultado.textContent = 'Por favor completá todos los campos.';
      return;
    }

    resultado.style.color = 'green';
    resultado.textContent = '¡Gracias por tu mensaje, ' + nombre + '! Te responderemos pronto.';

    form.reset();
  });
});
