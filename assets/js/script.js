const productos = [
    {
        id: 1,
        nombre: "Camisa a rayas",
        descripcion: "Camisa tropial playera hombre",
        precio: 80000,
        descuento: 50,
        valoracion: 4,    
    }
]
document.addEventListener("DOMContentLoaded", function() {    
    // Se referencia al section que contiene los productos    
    let grillaProductos = document.querySelector("#products-grid");    
    
    // Lógica de la card    // creamos el contenedor la card    
    let card = document.createElement("div")    
    card.classList.add("card"); 
    card.style.width = "18rem";   
    
    // creamos la imagen    
    let imagen = document.createElement("img")    
    imagen.src = "assets/img/products/f4.jpg"    
    imagen.classList.add("card-img-top")    
    card.appendChild(imagen)    
    
    // cuerpo de la card
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    card.appendChild(cardBody)

    //titulo de la card
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.innerText = "Camisa"
    cardBody.appendChild(cardTitle)

    //descripcion de la card
    let descripcion = document.createElement("p")
    descripcion.classList.add("card-text")
    descripcion.innerText = "Camisa playera hombre"
    cardBody.appendChild(descripcion)

    //
    let priceWrapper = document.createElement("div")   
    priceWrapper.classList.add("price-content")
    cardBody.appendChild(priceWrapper)

    //precio
    let precio1 = document.createElement("span")
    let precio2 = document.createElement("span")

    precio1.innerText = "$75.000"
    precio2.innerText = "$85.000"
    priceWrapper.append(precio1, precio2)

    //valoracion
    let ratingWrapper = document.createElement("div")
    ratingWrapper.classList.add("star-content")
    cardBody.appendChild(ratingWrapper)

    for (let i=0; i<5; i++){
        let star = document.createElement("i")
        star.classList.add("fa")
        star.classList.add("fa-star")
        ratingWrapper.appendChild(star)
    }

    //boton
    let buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-grid")

    let button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-primary")
    button.innerText = "Agregar al carrito"
    buttonWrapper.appendChild(button)

    cardBody.appendChild(buttonWrapper)



    // añadimos la card a la grilla de productos    
    grillaProductos.appendChild(card)
})