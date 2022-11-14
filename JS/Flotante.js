let abrir = document.querySelectorAll(".Productos_Contenido");

const cambio_Img = document.querySelector(".main_img")
const cambio_Img_Abajo = document.querySelectorAll(".thumbnail")

const Modelo = document.querySelector(".Modelo");
const Precio = document.querySelector(".precio_Numero");
const modificar = document.querySelector(".Buy-Buton");

let cerrar = document.querySelector(".close");
let modalC = document.querySelector(".contenedor__flotante");


abrir[0].addEventListener(`click`, function() {
   Modelo.innerHTML = "Baby Yoda" 
   Precio.innerHTML = "1090.00";
   modificar.setAttribute("id","1");

   cambio_Img.src = "./IMG/Catalago/Baby Yoda.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Baby Yoda.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Baby Yoda.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Baby Yoda.png"

   modalC.style.transform  = "scale(1)"
});
abrir[1].addEventListener(`click`, function() {
   Modelo.innerHTML = "Bob Esponja"
   Precio.innerHTML = "1090.00";
   modificar.setAttribute("id","2");

   cambio_Img.src = "./IMG/Catalago/Bob.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Bob.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Bob.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Bob.png"

   modalC.style.transform  = "scale(1)"
});
abrir[2].addEventListener(`click`, function() {
   Modelo.innerHTML = "Dragon Ball"
   Precio.innerHTML = "1190.00";
   modificar.setAttribute("id","3");

   cambio_Img.src = "./IMG/Catalago/Broly.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Broly.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Broly.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Broly.png"

   modalC.style.transform  = "scale(1)"
});
abrir[3].addEventListener(`click`, function() {
   Modelo.innerHTML = "Sencillo Negro y Rojo"
   Precio.innerHTML = "990.00";
   modificar.setAttribute("id","4");

   cambio_Img.src = "./IMG/Catalago/Cencillo Negro y Rojo.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Cencillo Negro y Rojo.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Cencillo Negro y Rojo.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Cencillo Negro y Rojo.png"

   modalC.style.transform  = "scale(1)"
});
abrir[4].addEventListener(`click`, function() {
   Modelo.innerHTML = "Sencillo Negro"
   Precio.innerHTML = "990.00";
   modificar.setAttribute("id","5");

   cambio_Img.src = "./IMG/Catalago/Cencillo Negro.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Cencillo Negro.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Cencillo Negro.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Cencillo Negro.png"

   modalC.style.transform  = "scale(1)"
});
abrir[5].addEventListener(`click`, function() {
   Modelo.innerHTML = "Sencillo Rojo"
   Precio.innerHTML = "990.00";
   modificar.setAttribute("id","6");

   cambio_Img.src = "./IMG/Catalago/Cencillo Rojo y nego Derretido.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Cencillo Rojo y nego Derretido.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Cencillo Rojo y nego Derretido.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Cencillo Rojo y nego Derretido.png"

   modalC.style.transform  = "scale(1)"
});
abrir[6].addEventListener(`click`, function() {
   Modelo.innerHTML = "Los Simpson"
   Precio.innerHTML = "1090.00";
   modificar.setAttribute("id","7");

   cambio_Img.src = "./IMG/Catalago/Homero.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Homero.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Homero.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Homero.png"

   modalC.style.transform  = "scale(1)"
});
abrir[7].addEventListener(`click`, function() {
   Modelo.innerHTML = "Naranja y Azul"
   Precio.innerHTML = "1190.00";
   modificar.setAttribute("id","8");

   cambio_Img.src = "./IMG/Catalago/Normal Azul y Naranja Derretido.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Normal Azul y Naranja Derretido.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Normal Azul y Naranja Derretido.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Normal Azul y Naranja Derretido.png"

   modalC.style.transform  = "scale(1)"
});
abrir[8].addEventListener(`click`, function() {
   Modelo.innerHTML = "Rojo y Gris"
   Precio.innerHTML = "1190.00";
   modificar.setAttribute("id","9");

   cambio_Img.src = "./IMG/Catalago/Normal Rojo y Gris.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Normal Rojo y Gris.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Normal Rojo y Gris.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Normal Rojo y Gris.png"

   modalC.style.transform  = "scale(1)"
});
abrir[9].addEventListener(`click`, function() {
   Modelo.innerHTML = "Extreme"
   Precio.innerHTML = "1090.00";
   modificar.setAttribute("id","10");

   cambio_Img.src = "./IMG/Catalago/Normal Rojo y Negro Salpicado.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Normal Rojo y Negro Salpicado.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Normal Rojo y Negro Salpicado.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Normal Rojo y Negro Salpicado.png"

   modalC.style.transform  = "scale(1)"
});
abrir[10].addEventListener(`click`, function() {
   Modelo.innerHTML = "Rick and Morty"
   Precio.innerHTML = "1190.00";
   modificar.setAttribute("id","11");

   cambio_Img.src = "./IMG/Catalago/Rick and Morty.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Rick and Morty.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Rick and Morty.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Rick and Morty.png"

   modalC.style.transform  = "scale(1)"
});
abrir[11].addEventListener(`click`, function() {
   Modelo.innerHTML = "Amarillo y Negro"
   Precio.innerHTML = "1190.00";
   modificar.setAttribute("id","12");

   cambio_Img.src = "./IMG/Catalago/Sencillo Amarillo y Negro.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Sencillo Amarillo y Negro.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Sencillo Amarillo y Negro.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Sencillo Amarillo y Negro.png"

   modalC.style.transform  = "scale(1)"
});
abrir[12].addEventListener(`click`, function() {
   Modelo.innerHTML = "Trazo de Bob Esponja"
   Precio.innerHTML = "1090.00";
   modificar.setAttribute("id","13");

   cambio_Img.src = "./IMG/Catalago/Trazo Bob.png"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Trazo Bob.png"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Trazo Bob.png"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Trazo Bob.png"

   modalC.style.transform  = "scale(1)"
});
abrir[13].addEventListener(`click`, function() {
   Modelo.innerHTML = "Goku y Vegetta"
   Precio.innerHTML = "1190.00";
   modificar.setAttribute("id","14");

   cambio_Img.src = "./IMG/Catalago/Dragon Ball.webp"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Dragon Ball.webp"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Dragon Ball.webp"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Dragon Ball.webp"

   modalC.style.transform  = "scale(1)"
});
abrir[14].addEventListener(`click`, function() {
   Modelo.innerHTML = "Stitch"
   Precio.innerHTML = "1090.00";
   modificar.setAttribute("id","15");

   cambio_Img.src = "./IMG/Catalago/Stich.jfif"
   cambio_Img_Abajo[0].src = "./IMG/Catalago/Stich.jfif"
   cambio_Img_Abajo[1].src = "./IMG/Catalago/Stich.jfif"
   cambio_Img_Abajo[2].src = "./IMG/Catalago/Stich.jfif"

   modalC.style.transform  = "scale(1)"
});


cerrar.addEventListener(`click`, function() {
   modalC.style.transform  = "scale(0)"
});