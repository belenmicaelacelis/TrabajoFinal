const URL_PRODUCTOS = "https://fakestoreapi.com/products";
const URL_CATEGORIAS = "https://fakestoreapi.com/products/categories";

let productos = [];
let carrito = [];

/* DARK MODE */
const btnTema = document.getElementById("btnTema");

/* OBTENER PRODUCTOS */
async function obtenerProductos() {
    try {
        const respuesta = await fetch(URL_PRODUCTOS);
        productos = await respuesta.json();
        renderizarProductos(productos);
        ocultarLoader();
    } catch (error) {
        console.log(error);
        alert("Error al cargar productos");
    }
}

/* OBTENER CATEGORIAS */
async function obtenerCategorias() {
    try {
        const respuesta = await fetch(URL_CATEGORIAS);
        const categorias = await respuesta.json();
        renderizarCategorias(categorias);
    } catch (error) {
        console.log(error);
    }
}

/* FILTRO */
filtroCategorias.addEventListener("change", () => {
    const categoria = filtroCategorias.value;

    if (categoria === "all") {
        renderizarProductos(productos);
    } else {
        const productosFiltrados = productos.filter(
            (producto) => producto.category === categoria
        );

        renderizarProductos(productosFiltrados);
    }
});

/* BUSCADOR */
buscador.addEventListener("keyup", () => {
    const texto = buscador.value.toLowerCase();

    const productosFiltrados = productos.filter(
        (producto) =>
            producto.title
                .toLowerCase()
                .includes(texto)
    );

    renderizarProductos(productosFiltrados);
});

/* AGREGAR CARRITO */
function agregarCarrito(id) {
    const producto = productos.find(
        (producto) => producto.id === id
    );

    carrito.push(producto);

    actualizarContadorCarrito(carrito.length);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}

/* RECUPERAR CARRITO */
function recuperarCarrito() {
    const carritoGuardado = JSON.parse(
        localStorage.getItem("carrito")
    );

    if (carritoGuardado) {
        carrito = carritoGuardado;

        actualizarContadorCarrito(
            carrito.length
        );
    }
}

/* VER DETALLE */
function verDetalle(id) {
    const producto = productos.find(
        (producto) => producto.id === id
    );

    abrirModal(producto);
}

/* DARK MODE */
btnTema.addEventListener("click", () => {
    const temaActual = document.documentElement.getAttribute("data-tema");

    if (temaActual === "dark") {
        document.documentElement.setAttribute("data-tema", "light");

        localStorage.setItem(
            "tema",
            "light"
        );

    } else {
        document.documentElement.setAttribute("data-tema", "dark");

        localStorage.setItem(
            "tema",
            "dark"
        );
    }
});

/* RECUPERAR TEMA */
function recuperarTema() {
    const tema = localStorage.getItem("tema");

    if (tema) {
        document.documentElement.setAttribute("data-tema", tema);
    }
}

/* INICIO */
obtenerProductos();
obtenerCategorias();
recuperarCarrito();
recuperarTema();