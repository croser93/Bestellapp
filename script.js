

function init() {
    loadFromLocalStorage(); 
    loadCartFromLocalStorage(); 
    renderDbMeal(); 
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
    const cartRes = document.getElementById("cart-section_Res")

    cartRef.innerHTML = ""
    cartRes.innerHTML = ""

    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        cartRef.innerHTML += cartTemplateToIndex(cartIndex)
        cartRes.innerHTML += cartTemplateToIndex(cartIndex)
          
    }
    
}
