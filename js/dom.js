/* ELEMENTOS HTML */
const gridProductos = document.getElementById("gridProductos");
const filtroCategorias = document.getElementById("filtroCategorias");
const buscador = document.getElementById("buscador");
const contadorCarrito = document.getElementById("contadorCarrito");
const loader = document.getElementById("loader");

/* MODAL */
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const modalImagen = document.getElementById("modalImagen");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalCategoria = document.getElementById("modalCategoria");
const modalPrecio = document.getElementById("modalPrecio");

/* RENDERIZAR PRODUCTOS */
function renderizarProductos(array) {
    gridProductos.innerHTML = "";

    array.forEach((producto) => {
        gridProductos.innerHTML += `
            <div class="card">
                <div class="cardImagen">
                    <img src="${producto.image}">
                </div>
                <div class="cardInfo">
                    <h3 class="cardTitulo">${producto.title}</h3>
                    <p class="cardPrecio">$${producto.price}</p>
                    <div class="cardBotones">
                        <button class="btn btnDetalle" onclick="verDetalle(${producto.id})">
                            Ver
                        </button>

                        <button class="btn btnAgregar" onclick="agregarCarrito(${producto.id})">
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

/* RENDERIZAR CATEGORIAS */
function renderizarCategorias(categorias) {
    filtroCategorias.innerHTML = `
        <option value="all">
            Todas las categorías
        </option>
    `;

    categorias.forEach((categoria) => {
        filtroCategorias.innerHTML += `
            <option value="${categoria}">
                ${categoria}
            </option>
        `;
    });
}

/* ACTUALIZAR CARRITO */
function actualizarContadorCarrito(cantidad) {
    contadorCarrito.innerText = cantidad;
}

/* ABRIR MODAL */
function abrirModal(producto) {
    modal.style.display = "flex";
    modalImagen.src = producto.image;
    modalTitulo.innerText = producto.title;
    modalDescripcion.innerText = producto.description;
    modalCategoria.innerText = "Categoría: " + producto.category;
    modalPrecio.innerText = "$" + producto.price;
}

/* CERRAR MODAL */
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

/* LOADER */
function ocultarLoader() {
    loader.style.display = "none";
}