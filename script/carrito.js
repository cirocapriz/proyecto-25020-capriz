/*

document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  const contador = document.getElementById('contador-carrito');
  const listaCarrito = document.getElementById('lista-carrito');
  const vaciarBtn = document.getElementById('vaciar-carrito');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  actualizarContador();

  if (botonesAgregar.length) {
    botonesAgregar.forEach(boton => {
      boton.addEventListener('click', () => {
        const producto = boton.dataset.producto;
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarContador();
      });
    });
  }

  if (listaCarrito) {
    mostrarCarrito();
    vaciarBtn.addEventListener('click', () => {
      carrito = [];
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  }

  function actualizarContador() {
    if (contador) {
      contador.textContent = carrito.length;
    }
  }

  function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    if (carrito.length === 0) {
      listaCarrito.innerHTML = '<li>Carrito vacío</li>';
      return;
    }
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = producto;
      listaCarrito.appendChild(li);
    });
  }
});



document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('lista-carrito');
  const vaciarBtn = document.getElementById('vaciar-carrito');
  const totalElem = document.getElementById('total');
  const finalizarBtn = document.getElementById('finalizar-compra');
  const contador = document.getElementById('contador-carrito');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const productosInfo = {
    'Martín Fierro': { precio: 2500, img: 'img/martin-fierro.jpg' },
    'Sin querer queriendo': { precio: 3100, img: 'img/sin-querer-queriendo.jpg' },
    'Cien años de soledad': { precio: 3900, img: 'img/cien-anos-de-soledad.jpg' },
    '1984': { precio: 3100, img: 'img/1984.jpg' },
    'El Principito': { precio: 2200, img: 'img/el-principito.jpg' },
    'La Sombra del Viento': { precio: 3600, img: 'img/la-sombra-del-viento.jpg' },
    'Don Quijote de la Mancha': { precio: 4300, img: 'img/don-quijote.jpg' },
    'Harry Potter y la piedra filosofal': { precio: 4200, img: 'img/harry-potter.jpg' },
  };

  mostrarCarrito();
  actualizarContador();

  if (vaciarBtn) {
    vaciarBtn.addEventListener('click', () => {
      carrito = [];
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  }

  if (finalizarBtn) {
    finalizarBtn.addEventListener('click', () => {
      if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
      }
      alert('¡Compra confirmada! Gracias por tu pedido.');
      carrito = [];
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  }

  function actualizarContador() {
    if (contador) {
      contador.textContent = carrito.length;
    }
  }

  function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
      listaCarrito.innerHTML = '<tr><td colspan="3">Carrito vacío</td></tr>';
      totalElem.textContent = 'Total: $0';
      return;
    }

    carrito.forEach(producto => {
      const info = productosInfo[producto] || { precio: 0, img: 'img/default.jpg' };
      total += info.precio;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${info.img}" alt="${producto}" style="width:50px;height:auto;"></td>
        <td>${producto}</td>
        <td>$${info.precio}</td>
      `;
      listaCarrito.appendChild(tr);
    });

    totalElem.textContent = `Total: $${total}`;
  }
});

*/

document.addEventListener('DOMContentLoaded', () => {
  const botonesAgregar = document.querySelectorAll('.agregar-carrito');
  const listaCarrito = document.getElementById('lista-carrito');
  const vaciarBtn = document.getElementById('vaciar-carrito');
  const totalElem = document.getElementById('total');
  const finalizarBtn = document.getElementById('finalizar-compra');
  const contador = document.getElementById('contador-carrito');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const productosInfo = {
    'Martín Fierro': { precio: 2500, img: 'img/martin-fierro.jpg' },
    'Sin querer queriendo': { precio: 3100, img: 'img/sin-querer-queriendo.jpg' },
    'Cien años de soledad': { precio: 3900, img: 'img/cien-anos-de-soledad.jpg' },
    '1984': { precio: 3100, img: 'img/1984.jpg' },
    'El Principito': { precio: 2200, img: 'img/el-principito.jpg' },
    'La Sombra del Viento': { precio: 3600, img: 'img/la-sombra-del-viento.jpg' },
    'Don Quijote de la Mancha': { precio: 4300, img: 'img/don-quijote.jpg' },
    'Harry Potter y la piedra filosofal': { precio: 4200, img: 'img/harry-potter.jpg' },
    'La chica del tren': { precio: 4200, img: 'img/la-chica-del-tren.jpg' },
    'Crimen y castigo': { precio: 7200, img: 'img/crimen-y-castigo.jpg' },
  };

  actualizarContador();

  if (botonesAgregar.length) {
  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', (e) => {
      e.stopPropagation(); 
      const producto = boton.dataset.producto;

      const idx = carrito.findIndex(item => item.nombre === producto);
      if (idx !== -1) {
        carrito[idx].cantidad++;
      } else {
        carrito.push({ nombre: producto, cantidad: 1 });
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      actualizarContador();
    });
  });
}


  if (listaCarrito) {
    mostrarCarrito();

    if (vaciarBtn) {
      vaciarBtn.addEventListener('click', () => {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContador();
      });
    }

    if (finalizarBtn) {
      finalizarBtn.addEventListener('click', () => {
        if (carrito.length === 0) {
          alert('El carrito está vacío.');
          return;
        }
        alert('¡Compra confirmada! Gracias por tu pedido.');
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        mostrarCarrito();
        actualizarContador();
      });
    }
  }

  function actualizarContador() {
    if (contador) {
      contador.textContent = carrito.length;
    }
  }
/*
  function mostrarCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
      listaCarrito.innerHTML = '<tr><td colspan="3">Carrito vacío</td></tr>';
      if (totalElem) totalElem.textContent = 'Total: $0';
      return;
    }

    carrito.forEach(producto => {
      const info = productosInfo[producto] || { precio: 0, img: 'img/default.jpg' };
      total += info.precio;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${info.img}" alt="${producto}" style="width:50px;height:auto;"></td>
        <td>${producto}</td>
        <td>$${info.precio}</td>
      `;
      listaCarrito.appendChild(tr);
    });

    if (totalElem) totalElem.textContent = `Total: $${total}`;
  }
    

  function mostrarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

  if (carrito.length === 0) {
    listaCarrito.innerHTML = '<tr><td colspan="4">Carrito vacío</td></tr>';
    if (totalElem) totalElem.textContent = 'Total: $0';
    return;
  }

  carrito.forEach((producto, index) => {
    const info = productosInfo[producto] || { precio: 0, img: 'img/default.jpg' };
    total += info.precio;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${info.img}" alt="${producto}" style="width:50px;height:auto;"></td>
      <td>${producto}</td>
      <td>$${info.precio}</td>
      <td><button class="eliminar-item" data-index="${index}" style="background:grey;color:white;border:none;border-radius:4px;padding:4px 8px;cursor:pointer;">❌</button></td>
    
      
    `;
    listaCarrito.appendChild(tr);
  });

  if (totalElem) totalElem.textContent = `Total: $${total}`;

  document.querySelectorAll('.eliminar-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(btn.dataset.index);
      carrito.splice(idx, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  });
}

 */

function mostrarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

  if (carrito.length === 0) {
    listaCarrito.innerHTML = '<tr><td colspan="5">Carrito vacío</td></tr>';
    if (totalElem) totalElem.textContent = 'Total: $0';
    return;
  }

  carrito.forEach((item, index) => {
    const info = productosInfo[item.nombre] || { precio: 0, img: 'img/default.jpg' };
    total += info.precio * item.cantidad;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><img src="${info.img}" alt="${item.nombre}" style="width:50px;height:auto;"></td>
      <td>${item.nombre}</td>
      <td>$${info.precio}</td>
      <td>
        <button class="menos" data-index="${index}">–</button>
        ${item.cantidad}
        <button class="mas" data-index="${index}">+</button>
      </td>
      <td><button class="eliminar-item" data-index="${index}">❌</button></td>
    `;
    listaCarrito.appendChild(tr);
  });

  if (totalElem) totalElem.textContent = `Total: $${total}`;

  document.querySelectorAll('.eliminar-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      carrito.splice(idx, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  });

  document.querySelectorAll('.mas').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      carrito[idx].cantidad++;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  });

  document.querySelectorAll('.menos').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      if (carrito[idx].cantidad > 1) {
        carrito[idx].cantidad--;
      } else {
        carrito.splice(idx, 1); // si llega a 0, lo sacamos
      }
      localStorage.setItem('carrito', JSON.stringify(carrito));
      mostrarCarrito();
      actualizarContador();
    });
  });
}



});



document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  const logueado = localStorage.getItem('logueado');

  if (logueado) {
    const li = document.createElement('li');
    li.innerHTML = `Bienvenido, ${logueado} | <a href="#" id="cerrar-sesion">Cerrar sesión</a>`;
    navbar.insertBefore(li, navbar.firstChild);

    const cerrar = li.querySelector('#cerrar-sesion');
    cerrar.addEventListener('click', e => {
      e.preventDefault();
      localStorage.removeItem('logueado');
      window.location.reload();
    });
  }
});


