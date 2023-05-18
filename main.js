// Cambio de cantidad de articulos ingresado por el usuario

let minusBtn = document.querySelector('.input_minus');
let plusBtn = document.querySelector('.input_plus');
let userInput = document.querySelector('.input_number');

let userInputNumber = 0;

plusBtn.addEventListener('click',()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});


minusBtn.addEventListener('click',()=>{
    userInputNumber--;
    if (userInputNumber <= 0 ) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total del carrito cuando se prosiona el boton de añadir

const addtoCartBtn = document.querySelector('.details_button');
let cartNotification = document.querySelector('.header_cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addtoCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
   
    
});

// Mostrar el modal con el detalle con el carrito

const cartIconBtn = document.querySelector('.header_cart');
const cartModal = document.querySelector('.cart-modal');
// let priceModal = document.querySelector('.cart-modal_price');
const productContainer = document.querySelector('.cart-modal_chekout-container');

cartIconBtn.addEventListener('click', ()=>{
   cartModal.classList.toggle('show');

    if (lastValue == 0) {
        productContainer.innerHTML = '<P class="cart-empty">Tu carrito esta vacio</P>';
        }else{
        drawProductInModal();
    }
   
});

// Borrar el contenido del carrito.
function deleteProduct() {

    const deleteProductBtn = document.querySelector('.cart-modal_delete');

    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<P class="cart-empty">Tu carrito esta vacio</P>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

// Cambiar imagenes cuando se preciones los botones flechas
const imageContainer = document.querySelector('.gallery_imagen-container');
const previoustGalleryBtn = document.querySelector('.gallery_previous');
const nextGalleryBtn = document.querySelector('.gallery_next');
let imgIndex = 1;
const imagesUrls = [
   ' ../images/image-product-1.jpg',
   ' ../images/image-product-2.jpg',
   ' ../images/image-product-3.jpg',
   ' ../images/image-product-4.jpg'
]

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
});

previoustGalleryBtn.addEventListener('click', ()=>{
    changePreviousImage(imageContainer);
});

// Cambiar las imagenes principales del thumnail

let thumbnails = document.querySelectorAll('.gallery_thumnail')
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event=>{
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    });
});

// Cambiar las imagenes principales desde los thumbnails en el modal
let modalthumbnails = document.querySelectorAll('.modal-gallery_thumnail');
const modalImageContainer = document.querySelector('.modal-gallery_image-container');
modalthumbnails = [...modalthumbnails]

modalthumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event=>{
           (event.target.id.slice(-1))
           modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    });
});

// Cambiar imagenes principar de modal desde flechas en el modal

const previousModalBtn = document.querySelector('.modal-gallery_previous');
const nextModalBtn = document.querySelector('.modal-gallery_next');

nextModalBtn.addEventListener('click', ()=>{
    changeNextImage(imodalImageContainer);
});

previousModalBtn.addEventListener('click', ()=>{
    changePreviousImage(modalImageContainer);
});

// Mostrar el navbar cuando presiono el menu de hamburgesa
const hamburgerMenu = document.querySelector('.header_menu');
const modalNavbar = document.querySelector('.modal-navbar_background');
const closeModalNavbar = document.querySelector('.modal-navbar_close-icon');

modalNavbar.style.display = 'none'

hamburgerMenu.addEventListener('click', ()=>{
    console.log('abrir modal');
    modalNavbar.style.display = 'block';
});

closeModalNavbar.addEventListener('click', ()=>{
    modalNavbar.style.display = 'none';
});

// Funciones

function drawProductInModal() {
    productContainer.innerHTML = ` <div class="cart-modal_details-container">
    <img class="cart-modal_image" src="./images/image-product-1-thumbnail.jpg" alt="">
         <div>
             <p class="cart-modal_product">Edicion Limitada Otoño...</p>
             <p class="cart-modal_price">$125.00 x3 <span>$375.00</span></p>
         </div>
    <img class="cart-modal_delete" src="./images/icon-delete.svg" alt="delete">
  </div>
  <button class="cart-modal_chekout">Verificar</button>
 </div>`
 deleteProduct()
 let priceModal = document.querySelector('.cart-modal_price');
 priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgContainer) {
    if (imgIndex == 4) {
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function  changePreviousImage(imgContainer) {
    if (imgIndex == 1) {
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

   // Mostrar el modal de imagenes cuando hago click en la imagen principal
       const imagesModal = document.querySelector('.modal-gallery_background');
       const closeModalBtn = document.querySelector('.modal-gallery_close-container');
   imageContainer.addEventListener('click', ()=>{
    imagesModal.style.display = 'grid';
   });

   closeModalBtn.addEventListener('click', ()=>{
    imagesModal.style.display = 'none';
   });