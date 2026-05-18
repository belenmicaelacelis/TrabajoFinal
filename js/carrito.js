const contenedorCarrito =
    document.getElementById('contenedorCarrito');

const totalCarrito =
    document.getElementById('totalCarrito');

const btnComprar =
    document.getElementById('btnComprar');

let carrito =
    JSON.parse(localStorage.getItem('carrito')) || [];

/* RENDERIZAR */

function renderizarCarrito() {

    contenedorCarrito.innerHTML = '';

    let total = 0;

    if (carrito.length === 0) {

        contenedorCarrito.innerHTML = `
        
            <h2>
                El carrito está vacío
            </h2>
        
        `;

        totalCarrito.innerText =
            'Total: $0';

        return;

    }

    carrito.forEach((producto, index) => {

        total += producto.price;

        contenedorCarrito.innerHTML += `
        
            <div class="itemCarrito">

                <img src="${producto.image}">

                <div class="itemInfo">

                    <h3>
                        ${producto.title}
                    </h3>

                    <p>
                        $${producto.price}
                    </p>

                </div>

                <button
                    onclick="eliminarProducto(${index})"
                    class="btnEliminar"
                >

                    Eliminar

                </button>

            </div>
        
        `;

    });

    totalCarrito.innerText =
        "Total: $" + total.toFixed(2);

}

/* ELIMINAR */

function eliminarProducto(index) {

    carrito.splice(index, 1);

    localStorage.setItem(
        'carrito',
        JSON.stringify(carrito)
    );

    renderizarCarrito();

}

/* FINALIZAR */

btnComprar.addEventListener('click', () => {

    if (carrito.length === 0) {

        alert('El carrito está vacío');

        return;

    }

    alert('Compra realizada con éxito');

    carrito = [];

    localStorage.removeItem('carrito');

    renderizarCarrito();

});

/* INICIO */

renderizarCarrito();