

function init() {
    loadFromLocalStorage();
    loadCartFromLocalStorage();
    renderDbMeal();   
    renderCart();     
}

function loadFromLocalStorage() {
    const mealDB = localStorage.getItem('meal');
    if (mealDB) {
        meals = JSON.parse(mealDB);
    }
}

function renderDbMeal() {

    const mealRef = document.getElementById("meal-section")

    mealRef.innerHTML = ""

    for (let mealIndex = 0; mealIndex < meals.length; mealIndex++) {
        mealRef.innerHTML += mealTemplateToIndex(mealIndex)

          
    }
    
    
}

// ########################################################## Cart Funktion ##########################################################
function loadCartFromLocalStorage() {
    const cartDB = localStorage.getItem('cart');
    if (cartDB) {
        cart = JSON.parse(cartDB);
    }
}

function renderCart() {

    const cartRef = document.getElementById("cart-section")

    cartRef.innerHTML = ""

    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        cartRef.innerHTML += cartTemplateToIndex(cartIndex)

          
    }
    
    
}

// ########################################################## Add to Cart ##########################################################

function addToCart(mealIndex) {

    // let selectMeal = meals[mealIndex]
    // cart.push(selectMeal)
    
    // renderCart();
    if (mealIndex < 0 || mealIndex >= meals.length) {
        console.error("Ungültiger Index:", mealIndex);
        return;
    }

    const selectedMeal = meals[mealIndex];
    cart.push(selectedMeal);
    // 6. Aktualisiere die Anzeige des Warenkorbs
    renderCart();

    
}
