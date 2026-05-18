# ClickShop - Tienda Online

Proyecto final realizado con HTML, CSS y JavaScript consumiendo la Fake Store API.

---

# Descripción

ClickShop es una tienda online básica que permite:

- Ver productos obtenidos desde una API
- Filtrar productos por categoría
- Buscar productos por nombre
- Ver detalles de cada producto
- Agregar productos al carrito
- Simular una compra
- Guardar carrito usando localStorage
- Cambiar entre modo claro y oscuro

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Fake Store API

---

# Funcionalidades

## Productos

Se obtienen desde:

https://fakestoreapi.com/products

Cada producto muestra:

- Imagen
- Nombre
- Precio
- Botón de detalle
- Botón para agregar al carrito

---

## Detalle de producto

Al hacer click en "Ver":

- Se abre un modal
- Se muestra:
  - Imagen grande
  - Descripción
  - Categoría
  - Precio

---

## Filtro por categorías

Las categorías se obtienen desde:

https://fakestoreapi.com/products/categories

Permite mostrar productos según la categoría seleccionada.

---

## Buscador

Permite buscar productos por nombre en tiempo real.

---

## Carrito

El carrito permite:

- Agregar productos
- Ver cantidad de productos
- Ver total a pagar
- Eliminar productos
- Simular compra

Los datos se guardan usando localStorage.

---

## Dark Mode

La aplicación permite cambiar entre:

- Modo claro
- Modo oscuro

La preferencia queda guardada en localStorage.

---

## Loader

Mientras cargan los productos se muestra un loader animado.

---

# Estructura del proyecto

```txt
📁 proyecto

├── index.html
├── carrito.html
├── style.css

├── 📁 img
│   └── logo.png

├── 📁 js
│   ├── app.js
│   ├── dom.js
│   └── carrito.js


