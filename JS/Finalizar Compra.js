const precioFinal = document.querySelector(".precio_Final_Num")
const carritoVacio = document.querySelector(".carrito_vacio")
const contenidoFinalizar = document.querySelector(".Contenido_Finalizar")


document.querySelector(".Finalizar_Compra").addEventListener("click", () =>{
   let buyThings = JSON.parse(localStorage.getItem("buyThings"))
   if (buyThings == null || buyThings.length == 0) {
      carritoVacio.style.transform  = "scale(1)"
      carritoVacio.style.animation = "sacudida .01s 75"
   }
   if (buyThings !== null) {
      buyThings.forEach(productos => {
         const {image, title, price, id, amout, talla} = productos;
         const creadorDiv = document.createElement(`DIV`);
         creadorDiv.classList.add(`Item_Finalizar`);
         creadorDiv.innerHTML = `
         <img src="${image}" alt="" class="Img_Finalizar">
         <div class="content_Finalizar">
            <h5 class="Title_Finalizar">${title}</h5>
            <h5 class="price_Finalizar" id="${id}">$ ${price} MXN</h5>
            <h6 class="Cantidad_Finalizar">Cantidad: ${amout}</h6>
            <h6 class="Talla_Carrito">Talla: ${talla}</h6>
         </div>
         `

         contenidoFinalizar.appendChild(creadorDiv);
         totalCard = JSON.parse(localStorage.getItem("totalCard"))
         precioFinal.innerHTML = totalCard;
      })
   }
})

document.querySelector(".Cerrar_Formulario").addEventListener("click", () =>{
   const eliminarCerrar = document.querySelectorAll(".Item_Finalizar")
   eliminarCerrar.forEach(eliminar => {
      contenidoFinalizar.removeChild(eliminar)
   })
})

carritoVacio.addEventListener("click", ()=> {
   carritoVacio.style.transform  = "scale(0)"
})