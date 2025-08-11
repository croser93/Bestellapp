

function init() {
    loadFromLocalStorage(); // get the saved Meals form local storage 
    loadCartFromLocalStorage(); // get the saved Cart
    renderDbMeal();   // shows the saved Meals
    // renderCart();     // shows the current Cart
}

function loadFromLocalStorage() {
    const mealDB = localStorage.getItem('meal'); // read "meal" of the local storage
    if (mealDB) {
        meals = JSON.parse(mealDB); // change it in JS Object
    }
}

function renderDbMeal() {

    const mealRef = document.getElementById("meal-section")  //Gets the HTML area for the meals

    mealRef.innerHTML = "" // clean / empty

    for (let mealIndex = 0; mealIndex < meals.length; mealIndex++) {
        mealRef.innerHTML += mealTemplateToIndex(mealIndex) // Inserts each meal using a template

          
    }
    
    
}

// ########################################################## Cart Funktion ##########################################################
function loadCartFromLocalStorage() {
    const cartDB = localStorage.getItem('cart'); // read "cart" form the local Storage
    if (cartDB) {
        cart = JSON.parse(cartDB); // change it
    }
}

function renderCart() {

    const cartRef = document.getElementById("cart-section") 
    const cartRes = document.getElementById("cart-section_Res")

    cartRef.innerHTML = ""// clean / empty
    cartRes.innerHTML = ""

    for (let cartIndex = 0; cartIndex < cart.length; cartIndex++) {
        cartRef.innerHTML += cartTemplateToIndex(cartIndex) // get the content
        cartRes.innerHTML += cartTemplateToIndex(cartIndex)

          
    }
    
    
}
