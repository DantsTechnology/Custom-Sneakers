let finalizarCompra = document.querySelector(".Finalizar_Compra");
let cerrarFormulario = document.querySelector(".Cerrar_Formulario");
let contenedorTodoForm = document.querySelector(".Contenedor_Todo_Form");
let formularioflotante = document.querySelector(".formulario_flotante");


finalizarCompra.addEventListener(`click`, function() {
   let buyThings = JSON.parse(localStorage.getItem("buyThings"))
   if (buyThings !== null && buyThings.length !== 0) {
      contenedorTodoForm.style.opacity = "1"
      contenedorTodoForm.style.visibility = "visible";
      formularioflotante.classList.toggle("formulario_flotante_close");
   }
});

cerrarFormulario.addEventListener(`click`, function() {
   formularioflotante.classList.toggle("formulario_flotante_close");
   setTimeout(function(){
      contenedorTodoForm.style.opacity = "0"
      contenedorTodoForm.style.visibility = "hidden";
   }, 600);
});