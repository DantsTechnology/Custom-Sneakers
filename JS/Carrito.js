/* Variabels */
let allContainerCart = document.querySelector(".contenedor__flotante");
let containerBuyCart = document.querySelector(".Carrito_Items");
let priceTotal = document.querySelector(".price_num");
let amountProduct = document.querySelector(".count_product");

let buyThings = [];
let totalCard = 0;
let countProduct = 0;

/* Funcines */
loadEventListenrs();
function loadEventListenrs() {
   allContainerCart.addEventListener(`click`, addProduct);

   containerBuyCart.addEventListener(`click`, deleteProduct);
}

function addProduct(e) {
   e.preventDefault();
   if (e.target.classList.contains(`Buy-Buton`)) {
      let selectionProduct = e.target.parentElement;
      const selectProduct = selectionProduct.parentElement;
      readTheContent(selectProduct);
   }
}

document.querySelector(".Vaciar_Carrito").addEventListener("click", ()=> {
   localStorage.clear()
   location.reload()
})

function deleteProduct(e) {
   if (e.target.classList.contains(`delete_product`)) {
      const deleteId = e.target.getAttribute(`id`);

      let buyThings = JSON.parse(localStorage.getItem("buyThings"))
      buyThings.forEach(value => {
         if (value.id == deleteId) {
            let priceReduce = parseFloat(value.price) * parseFloat(value.amout)
            let totalCard = JSON.parse(localStorage.getItem("totalCard"))
            totalCard = totalCard - priceReduce
            if (totalCard == 0) {
               location.reload()
            }
            localStorage.setItem("totalCard", totalCard)
         }
      })
      buyThings = buyThings.filter(product => product.id != deleteId)
      localStorage.setItem("buyThings", JSON.stringify(buyThings))

      countProduct = JSON.parse(localStorage.getItem("countProduct"))
      countProduct--;
      localStorage.setItem("countProduct", JSON.stringify(countProduct))
   }
   loadHTML();
}

function loadContent(buy, info) {
   const exist = buy.some(product => product.id === info.id);
   if (exist) {
      const pro = buy.map(product => {
         if (product.id === info.id) {
            product.amout++;
            return product;
         } else {
            return product;
         }
      });
      buy = [...pro];
      localStorage.setItem("buyThings", JSON.stringify(buy))
   } else {
      buy = [...buy, info]
      localStorage.setItem("buyThings", JSON.stringify(buy))

      countProduct++;
      localStorage.setItem("countProduct", JSON.stringify(countProduct))
   }
}

function readTheContent(product) {
   const infoProduct = {
      talla: product.querySelector(`select`).value,
      image: product.querySelector(`.main_img`).src,
      title: product.querySelector(`.Modelo`).textContent,
      price: product.querySelector(`.precio_Numero`).textContent,
      id: product.querySelector(`a`).getAttribute(`id`),
      amout: 1
   }
 
   totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
   totalCard = totalCard.toFixed(2);
   localStorage.setItem("totalCard", totalCard)

   let buyThings = JSON.parse(localStorage.getItem("buyThings"))
   if (buyThings == null) {
      buyThings = []
      loadContent(buyThings, infoProduct)
   } else {
      loadContent(buyThings, infoProduct)
   }
   loadHTML()
}

window.addEventListener("load", ()=>{
   loadHTML()
})

function loadHTML() {
   clearHTML();
   let buyThings = JSON.parse(localStorage.getItem("buyThings"))
   if (buyThings !== null) {
      buyThings.forEach(product => {
         const {image, title, price, id, amout, talla} = product;
         const row = document.createElement(`DIV`);
         row.classList.add(`item`);
         row.innerHTML = `
            <img src="${image}" alt="" class="Img_Producto_Carrito">
            <div class="item_content">
               <h5 class="Title_Producto_Carrito">${title}</h5>
               <h5 class="cart_price">$ ${price} MXN</h5>
               <h5 class="Cantidad_Producto_Carrito">Cantidad: ${amout}</h5>
               <h5 class="Talla_Carrito">Talla: ${talla}</h5>
            </div>
            <span class="delete_product" id="${id}">X</span>
         `;
   
         containerBuyCart.appendChild(row);
   
         totalCard = JSON.parse(localStorage.getItem("totalCard"))
         priceTotal.innerHTML = totalCard;
   
         countProduct = JSON.parse(localStorage.getItem("countProduct"))
         amountProduct.innerHTML = countProduct;
   
         const quitarProducto = document.querySelector(".delete_product");
         quitarProducto.addEventListener(`click`, function() {
            if (containerBuyCart.firstChild = "0" ) {
               priceTotal.innerHTML = "0";
               amountProduct.innerHTML = "0";
            }
         })
      })
   }
}

function clearHTML() {
   containerBuyCart.innerHTML = ``;
}