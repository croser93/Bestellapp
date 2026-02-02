function addToCart(mealIndex) {
    const selectedMeal = meals[mealIndex];
    
    const existing = cart.find(m => m.name === selectedMeal.name);
    if (existing) 
        existing.quantity++;  
    else {
        const mealCopy = { ...selectedMeal, quantity: 1 };
        cart.push(mealCopy);
    }
    runFunctions()
    
}

function runFunctions() {
    updatePrices();
    renderCart(); 
    updateCartBadge();
    cartButtonDisabled();
}

function increaseAmount(cartIndex) {
    if (cart[cartIndex]) {
        if (!cart[cartIndex].quantity) {
            cart[cartIndex].quantity = 1;
        }
        cart[cartIndex].quantity++;

        runFunctions()
        
        const quantityRef = document.getElementById(`quantity-${cartIndex}`);
        if (quantityRef) {
            quantityRef.innerText = cart[cartIndex].quantity;
        }
    }
}

function decreaseAmount(cartIndex) {
    if (cart[cartIndex]) 
        if (cart[cartIndex].quantity > 1)
            cart[cartIndex].quantity--; 
        else 
            cart.splice(cartIndex, 1);
        

        runFunctions()

        const quantityRef = document.getElementById(`quantity-${cartIndex}`);
        if (quantityRef) 
            quantityRef.innerText = cart[cartIndex].quantity;     
    
}

function updatePrices() {

    let subtotal = 0;

    for (let item of cart) 
        subtotal+= item.preis * item.quantity;
    
    let delivery = subtotal >= 60 ? 0 :5.99;
    let total = subtotal + delivery;

    if (subtotal <= 0) 
        total = 0
        
    cart_prices(subtotal,delivery,total);
    renderCart();
}

function cart_PricesSubtotal(subtotal) {
    const id = ["subtotal", "dialog_subtotal", "carResSubtotal"]
    calc(subtotal, id)
}

function cart_PricesDelivery(delivery) {
    const id = ["delivery", "dialog_delivery", "carResDelivery"]
    calc(delivery, id)

}

function cart_PricesTotal(total) {
    const id = ["total", "dialog_total", "carResTotal", "price_text"]
    calc(total, id)
}

function calc(value, id){
     const calcvalue = value.toFixed(2)+ "€"
     id.forEach(ids => {
        document.getElementById(ids).innerText = calcvalue;
  });           
}

function cart_prices(subtotal,delivery,total) {
    cart_PricesSubtotal(subtotal);
    cart_PricesDelivery(delivery);
    cart_PricesTotal(total);  
}

function cartButtonDisabled() {
    if (cart.length > 0) {
    document.getElementById("card_footer").style.display = "";
    document.getElementById("slogan").style.display = "none";
    document.getElementById("slogan_Res").style.display = "none";
    document.getElementById("btn_Res").disabled = false;

    }
    else {
    document.getElementById("card_footer").style.display = "none";
    document.getElementById("slogan").style.display = "";
    document.getElementById("slogan_Res").style.display = "";
    document.getElementById("btn_Res").disabled = true;
    } 
}

function toggleDialog(event) {

    if (event.target !== event.currentTarget) 
    return

    let overlay = document.getElementById('body-overlay');
    let dialog = document.getElementById('start_dialog');

    overlay.classList.toggle('visible');
    dialog.classList.toggle('visible')
}

function toggleDialogRes(event) {

    if (event.target !== event.currentTarget) 
    return

    let overlay = document.getElementById('body-overlay');
    let dialog = document.getElementById('start_dialog_resp');

    overlay.classList.toggle('visible');
    dialog.classList.toggle('visible_cart');
    }
  
function toggleDialogBestellen(event) {

    if (event.target !== event.currentTarget) 
    return

    let dialog = document.getElementById('start_dialog_resp');
    let dialog1 = document.getElementById('start_dialog');

    dialog.classList.remove('visible_cart');
    dialog1.classList.toggle('visible')
}


function load_screen() {
const form = document.getElementById("order_form");
const confirmation = document.getElementById("confirmation");

if (form) {
form.addEventListener("submit", function(event) {
    event.preventDefault();

    confirmation.style = "";
    form.style = "display: none";

    setTimeout(() => {
    window.location.href = "./Index.html";
    }, 3000);
});
}
}

function getTotalQuantity() {
    return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-quantity');
    const totalQty = getTotalQuantity();

    if (badge) {
        if (badge) {
        badge.innerText = totalQty > 0 ? totalQty : "0";
        badge.style.display = 'flex';
        }
    }
}


function cleanCartOnly(cartIndex) {
    cart.splice(cartIndex,1);
    runFunctions()
}

function cleanCartAll() {
   cart.length = 0
   runFunctions()
}

