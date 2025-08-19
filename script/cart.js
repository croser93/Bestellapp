function addToCart(mealIndex) {
    const selectedMeal = meals[mealIndex];

    const existing = cart.find(m => m.name === selectedMeal.name);
    if (existing) {
        existing.quantity++;
        
    } else {
        const mealCopy = { ...selectedMeal, quantity: 1 };
        cart.push(mealCopy);
    }
    runFunctions()
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
    if (cart[cartIndex]) {
        if (cart[cartIndex].quantity > 1) {
            cart[cartIndex].quantity--; 
        } else {
            cart.splice(cartIndex, 1);
        }

        runFunctions()

        const quantityRef = document.getElementById(`quantity-${cartIndex}`);
        if (quantityRef) {
            quantityRef.innerText = cart[cartIndex].quantity;
        }      
    }
}

function updatePrices() {

    let subtotal = 0;

    for (let item of cart) {
        subtotal+= item.preis * item.quantity;
    }

    let delivery = subtotal >= 60 ? 0 :5.99;
    let total = subtotal + delivery;

    if (subtotal <= 0) {
        total = 0
        
    }
    cart_prices(subtotal, delivery, total);
    renderCart();
}

function cart_prices(subtotal, delivery, total) { // Ausgelagert 

    document.getElementById("subtotal").innerText = subtotal.toFixed(2)+ "€";
    document.getElementById("delivery").innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById("total").innerText = total.toFixed(2)+ "€";

    document.getElementById('dialog_subtotal').innerText = subtotal.toFixed(2)+ "€";
    document.getElementById('dialog_delivery').innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById('dialog_total').innerText = total.toFixed(2)+ "€";
    
    document.getElementById('carResSubtotal').innerText = subtotal.toFixed(2)+ "€";
    document.getElementById('carResDelivery').innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById('carResTotal').innerText = total.toFixed(2)+ "€";

    document.getElementById('price_text').innerText = total.toFixed(2)+ "€";
    
    
}

function toggleDialog(event) {

  if (event.target !== event.currentTarget) 
    return

   if (cart.length === 0) {
        alert(" Du musst erst etwas in den Warenkorb legen.");
        return;
    }

    let overlay = document.getElementById('body-overlay');
    let dialog = document.getElementById('start_dialog');
    
    overlay.classList.toggle('visible');
    dialog.classList.toggle('visible')
  }



function load_screen() {
    const form = document.getElementById("order_form");
    const confirmation = document.getElementById("confirmation");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            confirmation.style = ""; // zeigt loading screen an
            form.style = "display: none"; // Formular wird ausgeblendet

            setTimeout(() => {
            window.location.href = "./Index.html"; // kein refresh sonder verlinkung zur Index
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

    if (cart.length === 0) {
        alert(" Du musst erst etwas in den Warenkorb legen.");
        return;
    }

  let dialog = document.getElementById('start_dialog_resp');
  let dialog1 = document.getElementById('start_dialog');
    
  dialog.classList.remove('visible_cart');
  dialog1.classList.toggle('visible')
}

function runFunctions() { // mehrere Funktionen in eine Gepark um Funktionen zu kürzen

    updatePrices();
    renderCart(); 
    updateCartBadge();  
}


function cleanCartOnly(cartIndex) {

    cart.splice(cartIndex,1);
    runFunctions()
}


function cleanCartAll() {
   
   cart.length = 0
   runFunctions()
}

