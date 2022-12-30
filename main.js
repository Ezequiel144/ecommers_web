/* - Pidiendo datos del HTML - */
/* .Variables para el carrito*/
let buttom_minus = document.querySelector(".input_minus");
let buttom_plus = document.querySelector(".input_plus");
let cont_num = document.querySelector(".number");
/* .Variables de add to cart */
const add_to_cart = document.querySelector(".buttom");
let notifi_cart = document.querySelector(".cart__conta");
let last_value = parseInt(notifi_cart.innerText);
/* .Variables del click al carrito */
const cart = document.querySelector(".cart");
const cart_present = document.querySelector(".cart_content");
const cart_cost =  document.querySelector(".details__cart--presie");
/* .Varibles de borrar contenido del carrito */
const delete_product = document.querySelector(".details__delete");
const cart_empty = document.querySelector(".cart_content--checkout-details");
/* .Variables de click a imagenes principales */
const img_main = document.querySelector(".conten__img");
const img_black_opacity = document.querySelector(".background__opacity");
const img_close = document.querySelector(".background_close");
/*.Variables del carrusel(incluye flechas) */
const arrow_next = document.querySelector(".next");
const arrow_previous = document.querySelector(".previous");

/* .Variables para barra lateral*/
const menu_open = document.querySelector(".menu");
const lateral_bar = document.querySelector(".navbar__background");
const menu_close = document.querySelector(".close");



/* - Contadores -  */ 
/* .Variable contador del carrito */
let cont = 0;
let cont__img = 2;
let cont_inv_img = 0;

/* - contador para el carrito - */ 
buttom_plus.addEventListener("click",()=>{
    cont++;
    cont_num.value = cont;
    return console.log("se preciono el +");
});

buttom_minus.addEventListener("click",()=>{
    if(cont <= 0){
        cont = 0;
    }else{
        cont--;
        cont_num.value = cont;
    }
    
    return console.log("se preciono el -");
});

/* Añadir a carrito(add to cart) */
add_to_cart.addEventListener("click",()=>{
    last_value += cont;
    notifi_cart.innerText = last_value;

    notifi_cart.style.display = "block";
    cart_content_addtocart();
    let calc = 125 * last_value;
    //cart_cost.innerHTML = '$125.00 x '+ last_value +' <span class = "details__cart--cost">'+ calc +'.00</span>';

});
/* .Funciones de Añadir a carrito(add to cart)*/
function cart_content_addtocart(){
    let calc = 125 * last_value;
    cart_empty.innerHTML = '<div class="details__cart"> <img class="imgproduct" src="./images/image-product-1-thumbnail.jpg" alt=""> <div> <p class="details__cart--product">Fall Limited Edition Sneakerx</p> <p class="details__cart--presie">$125.00 x '+ last_value +'<span class="details__cart--cost">$ '+ calc + '.00</span></p> </div> <img class="details__delete" src="./images/icon-delete.svg" alt="delete"> </div> <button class="checkout">Checkout</button>';

    delete_cart_empty();
}

/* - click al carrito - */

cart.addEventListener("click",()=>{
    //cart_present.style.display = "block";//
    //muestra o oculta el loque tiene el carrito// 
    cart_present.classList.toggle("show");  //lo que hace toggles es preguntar si existe una clases llamada "show", si exsite entonces lo agrega a las classes 
    let calc = 125 * last_value;

    if(last_value == 0){
        cart_content_addtocart();
    } 
});

/* - Borrar productos del carrito - */
function delete_cart_empty(){
    const delete_product = document.querySelector(".details__delete");
    delete_product.addEventListener("click",()=>{
        cart_empty.innerHTML = '<p class="cart__empty">you cart is empty.</p>'; 
        last_value = 0;
        notifi_cart.style.display = "none";
    })
}

/* click a imagen principal */
img_main.addEventListener("click",()=>{
    img_black_opacity.style.display = "block";
});

img_close.addEventListener("click",()=>{
    img_black_opacity.style.display = "none";
});

/* - barra lateral - */

menu_open.addEventListener("click",()=>{
    lateral_bar.style.display = "block";
});

menu_close.addEventListener("click",()=>{
    lateral_bar.style.display = "none";
});

/* carrusel */

/*const img_carrusel = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];
    image-product-1.jpg     predeterminado(no hace falta que elcontador este en 1)      
    image-product-2.jpg     -2     
    image-product-3.jpg     -1
    image-product-4.jpg     0       
    su contador comenzara en 0.
    en la parte de agregarlo al url() le podemos sumar el 4.
*/

/* carrusel flecha next */
arrow_next.addEventListener("click",()=>{
    
    if(cont__img == 4){
        cont__img = 1;
    }else{
        cont__img ++;
    }

    img_main.style.backgroundImage = 'url("./images/image-product-'+cont__img+'.jpg")';

    /*if(cont__img <= 4 && cont__img > 0){
        img_main.style.backgroundImage = 'url("./images/image-product-'+cont__img+'.jpg")';
        cont__img ++;
    }else{
        cont__img = 1;
        img_main.style.backgroundImage = 'url("./images/image-product-'+cont__img+'.jpg")';
        cont__img ++;
    }*/
});

/* carrusel flecha previous */

arrow_previous.addEventListener("click",()=>{
    if(cont_inv_img == -3){
        cont_inv_img = 0;
    }else{
        cont_inv_img--;
    }
    img_main.style.backgroundImage = 'url("./images/image-product-'+(cont_inv_img + 4) +'.jpg")';
    /*
    if(cont_inv_img <= 0 && cont_inv_img < -3){
        img_main.style.backgroundImage = 'url("./images/image-product-'+(cont_inv_img + 4) +'.jpg")';
        cont_inv_img --;
    }else{
        cont_inv_img = 1;
        img_main.style.backgroundImage = 'url("./images/image-product-'+(cont_inv_img + 4) +'.jpg")';
        cont_inv_img --;
    }*/
});



