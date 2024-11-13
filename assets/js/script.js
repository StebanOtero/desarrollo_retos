import { agregarProducto, carrito } from "../js/localstorage.js";

document.addEventListener("DOMContentLoaded", function() {
    cargarProductos();
});

// Función para cargar los productos desde el archivo JSON
function cargarProductos() {
    fetch("productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then(productos => {
            productos.forEach(dibujarTarjeta);  // Dibuja cada tarjeta de producto
        })
        .catch(error => console.error("Error:", error));
}

// Función para crear el componente de valoraciones
function valoracionProducto(numero) {
    const ratingWrapper = document.createElement("div");
    ratingWrapper.classList.add("star-content");

    for (let i = 0; i < 5; i++) {
        const star = document.createElement("i");
        star.classList.add(i < numero ? "fa-solid" : "fa-regular", "fa-star");
        ratingWrapper.appendChild(star);
    }

    return ratingWrapper;
}

// Función para dibujar cada tarjeta de producto
function dibujarTarjeta(producto) {
    const grillaProductos = document.querySelector("#products-grid");

    // Crear la estructura de la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.classList.add("card-img-top");
    card.appendChild(imagen);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = producto.nombre;
    cardBody.appendChild(cardTitle);

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.innerText = producto.descripcion;
    cardBody.appendChild(description);

    const priceWrapper = document.createElement("div");
    priceWrapper.classList.add("price-content");
    cardBody.appendChild(priceWrapper);

    const price1 = document.createElement("span");
    const price2 = document.createElement("span");
    price1.innerText = formatoMoneda(producto.precio);
    price2.innerText = formatoMoneda(producto.precio - (producto.precio * producto.descuento / 100));
    priceWrapper.append(price1, price2);

    const rating = valoracionProducto(producto.valoracion);
    cardBody.appendChild(rating);

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("d-grid");

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => onProductClick(producto));
    buttonWrapper.appendChild(button);

    cardBody.appendChild(buttonWrapper);
    grillaProductos.appendChild(card);
}

// Función para dar formato a los precios
function formatoMoneda(numero) {
    return Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        currencyDisplay: "code",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(numero);
}

// Función para manejar el evento de clic en el botón de agregar al carrito
function onProductClick(producto) {
    agregarProducto(producto);
}
