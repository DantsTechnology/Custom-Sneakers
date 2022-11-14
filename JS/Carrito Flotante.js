let abrirCarrito = document.querySelector(".img_Carrito")
let cerrarCarrito = document.querySelector(".Cerrar_Carrito")
let CarritoProductos = document.querySelector(".Carrito_De_Productos")
let finalizarYCedrrar = document.querySelector(".Finalizar_Compra")
let comprarYCerrar = document.querySelectorAll(".Productos_Contenido")

abrirCarrito.addEventListener(`click`, function() {
   CarritoProductos.style.transform  = "scale(1)"
});

cerrarCarrito.addEventListener(`click`, function() {
   CarritoProductos.style.transform  = "scale(0)"
});

finalizarYCedrrar.addEventListener(`click`, function() {
   CarritoProductos.style.transform  = "scale(0)"
});

comprarYCerrar.forEach(cerrar =>{
   cerrar.addEventListener("click", ()=> {
      CarritoProductos.style.transform  = "scale(0)"
   })
})