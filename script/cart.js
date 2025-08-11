function addToCart(mealIndex) {
    const selectedMeal = meals[mealIndex];// Get the meal

    const existing = cart.find(m => m.name === selectedMeal.name);
    if (existing) {
        existing.quantity++;
        

    } else {
        // Erstes Mal → quantity hinzufügen
        const mealCopy = { ...selectedMeal, quantity: 1 };
        cart.push(mealCopy);
    }
        updatePrices();
        renderCart(); 
        updateCartBadge();
 
}

function increaseAmount(cartIndex) {
    if (cart[cartIndex]) {
        if (!cart[cartIndex].quantity) {
            cart[cartIndex].quantity = 1;
        }
        cart[cartIndex].quantity++;

        updatePrices();
        renderCart();
        updateCartBadge();
        
    
        const quantityRef = document.getElementById(`quantity-${cartIndex}`);
        if (quantityRef) {
            quantityRef.innerText = cart[cartIndex].quantity;
        }
    }
}

function decreaseAmount(cartIndex) {
    if (cart[cartIndex]) {
        if (cart[cartIndex].quantity > 1) {
            cart[cartIndex].quantity--; // verringere die Menge
        } else {
            cart.splice(cartIndex, 1); // entferne das Gericht ganz
        }
        updatePrices();
        renderCart();
        updateCartBadge();

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

    document.getElementById("subtotal").innerText = subtotal.toFixed(2)+ "€";
    document.getElementById("delivery").innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById("total").innerText = total.toFixed(2)+ "€";

    document.getElementById('dialog_subtotal').innerText = subtotal.toFixed(2)+ "€";
    document.getElementById('dialog_delivery').innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById('dialog_total').innerText = total.toFixed(2)+ "€";
    
    document.getElementById('carResSubtotal').innerText = subtotal.toFixed(2)+ "€";
    document.getElementById('carResDelivery').innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById('carResTotal').innerText = total.toFixed(2)+ "€";

    renderCart();

}

function cleanCartOnly(cartIndex) {

    cart.splice(cartIndex,1);

    updatePrices();
    renderCart();
    updateCartBadge();
}

function cleanCartAll() {
   
   cart.length = 0

    updatePrices();
    renderCart();
    updateCartBadge();
}

function toggleDialog(event) {

  if (event.target !== event.currentTarget) 
    return

   if (cart.length === 0) {
        alert("⚠️ Du musst erst etwas in den Warenkorb legen.");
        return;
    }

    let overlay = document.getElementById('body-overlay');
    let dialog = document.getElementById('start_dialog');
    
    overlay.classList.toggle('sichtbar');
    dialog.classList.toggle('sichtbar')



  }

  document.addEventListener("DOMContentLoaded", function () {
    const formular = document.getElementById("bestellformular");
    const dialog = document.getElementById("start_dialog");

    if (formular) {
        formular.addEventListener("submit", function (event) {
            event.preventDefault();

            // Gesamtpreis holen
            const preisText = document.getElementById("dialog_total").textContent;

            // Formular durch Bestätigung ersetzen
            dialog.innerHTML = `
                <div class="confirmation">
                    <div class="loader"></div>
                    <p>🎉 Vielen Dank für deine Bestellung über <strong>${preisText}</strong>!</p>
                    <p>Deine Bestellung ist bei uns eingegangen und wird jetzt bearbeitet.</p>
                    <p>Du wirst gleich zurückgeleitet...</p>
                </div>
            `;

            // Nach 3,5 Sekunden Seite neu laden
            setTimeout(() => {
                location.reload();
            }, 3500);
        });
    }
});


function getTotalQuantity() {
    return cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
}

function updateCartBadge() {
    const badge = document.getElementById('cart-quantity');
    const totalQty = getTotalQuantity();

    if (badge) {
        if (badge) {
        badge.innerText = totalQty > 0 ? totalQty : "0";  // Mindestens 0 anzeigen
        badge.style.display = 'flex';  // Immer anzeigen
        }
    }
}



function toggleDialogRes(event) {

  if (event.target !== event.currentTarget) 
    return

   if (cart.length === 0) {
        alert("⚠️ Du musst erst etwas in den Warenkorb legen.");
        return;
    }

    let overlay = document.getElementById('body-overlay');
    let dialog = document.getElementById('start_dialog_resp');

    overlay.classList.toggle('sichtbar');
    dialog.classList.toggle('opa');



  }
  
function toggleDialogtest(event) {

  if (event.target !== event.currentTarget) 
    return


  let dialog = document.getElementById('start_dialog_resp');
  let dialog1 = document.getElementById('start_dialog');
    
  dialog.classList.remove('opa');
  dialog1.classList.toggle('sichtbar')

    
    



  }