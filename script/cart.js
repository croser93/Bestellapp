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
 
}

function increaseAmount(cartIndex) {
    if (cart[cartIndex]) {
        if (!cart[cartIndex].quantity) {
            cart[cartIndex].quantity = 1;
        }
        cart[cartIndex].quantity++;

        updatePrices();
        renderCart();
        
    
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

    document.getElementById("subtotal").innerText = subtotal.toFixed(2)+ "€";
    document.getElementById("delivery").innerText = delivery === 0 ? "Gratis" : delivery.toFixed(2)+ "€";
    document.getElementById("total").innerText = total.toFixed(2)+ "€";
    renderCart();

}


