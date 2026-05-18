# ClickShop - Tienda Online

Proyecto final realizado con HTML, CSS y JavaScript consumiendo la Fake Store API.

---

# Descripción

ClickShop es una tienda online que permite visualizar productos obtenidos desde una API externa.

La aplicación cuenta con:

- Catálogo dinámico de productos
- Filtro por categorías
- Buscador en tiempo real
- Modal con detalle del producto
- Carrito de compras
- Persistencia de datos con localStorage
- Modo oscuro
- Loader de carga
- Diseño responsive

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fake Store API
- localStorage

---

# Funcionalidades

## Productos dinámicos

Los productos se obtienen utilizando Fetch API desde:

https://fakestoreapi.com/products

Cada producto contiene:

- Imagen
- Título
- Precio
- Botón de detalle
- Botón para agregar al carrito

---

## Modal de detalle

Al seleccionar un producto se abre un modal que muestra:

- Imagen ampliada
- Descripción
- Categoría
- Precio

---

## Filtro por categorías

Las categorías se cargan dinámicamente desde:

https://fakestoreapi.com/products/categories

Permite visualizar productos según la categoría elegida.

---

## Buscador

La aplicación incluye un buscador que permite filtrar productos en tiempo real mediante el nombre.

---

## Carrito de compras

El carrito permite:

- Agregar productos
- Visualizar productos agregados
- Eliminar productos
- Calcular el total
- Finalizar compra

La información se guarda utilizando localStorage.

---

## Dark Mode

La aplicación permite cambiar entre:

- Modo claro
- Modo oscuro

La preferencia del usuario queda almacenada en localStorage.

---

## Loader

Mientras los productos son cargados desde la API se muestra un loader animado.

---

# Organización del proyecto

El proyecto se encuentra dividido en distintos archivos para mejorar la organización y separación de responsabilidades.

---

## index.html

Página principal de la tienda.

Contiene:

- Header
- Buscador
- Filtros
- Grid de productos
- Modal
- Loader

---

## carrito.html

Página dedicada al carrito de compras.

Permite:

- Ver productos agregados
- Eliminar productos
- Ver total
- Finalizar compra

---

## style.css

Archivo encargado de todos los estilos visuales de la aplicación.

Incluye:

- Responsive Design
- Dark Mode
- Cards
- Modal
- Loader
- Carrito

---

## dom.js

Archivo encargado de la manipulación del DOM.

Funciones principales:

- Renderizar productos
- Renderizar categorías
- Abrir modal
- Cerrar modal
- Actualizar contador
- Ocultar loader

---

## app.js

Archivo principal de la lógica de la aplicación.

Funciones principales:

- Obtener productos desde la API
- Obtener categorías
- Filtrar productos
- Buscar productos
- Agregar al carrito
- Manejar localStorage
- Manejar dark mode

---

## carrito.js

Archivo encargado de toda la lógica del carrito.

Funciones principales:

- Mostrar productos del carrito
- Calcular total
- Eliminar productos
- Vaciar carrito
- Finalizar compra

---

# Estructura del proyecto

```txt
📁 proyecto

├── index.html
├── carrito.html
├── style.css
├── README.md

├── 📁 img
│   └── logo.png

├── 📁 js
│   ├── app.js
│   ├── dom.js
│   └── carrito.js