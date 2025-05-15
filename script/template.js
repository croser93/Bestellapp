function mealTemplateToIndex(mealIndex) {
    return `

    
    <div class="box">
            <div class="box-content">
                <h3>${meals[mealIndex].name}</h3>
                <div class="test">
                    <p>${meals[mealIndex].rezept}</p>
                    <p>${meals[mealIndex].beschreibung}</p>
                </div>
            </div>

            <div class="price"><p>${meals[mealIndex].preis.toFixed(2) + "€"}</p></div>
            <button onclick="addToCart(${mealIndex})">+</button>
    </div>

 `
 // Diese funktion entnimmt die Informationen aus der Datenbank und zeigt diese als HTML an
};

function cartTemplateToIndex (cartIndex) {
    const meal = cart[cartIndex];
    return `

    <div class="cart-item">
        <div>
            <span class="h3-cart">${meal.name}</span>
        </div>

        <div class="price-and-btn">
            <div class="add-and-delet">
                <button onclick="increaseAmount(${cartIndex})">+</button>
                <p id="quantity-${cartIndex}">${meal.quantity}</p>
                <button onclick="decreaseAmount(${cartIndex})">-</button>
        </div>
            <p>stk: ${meal.preis.toFixed(2) + "€"}</p>

    </div>
        
    `
};

// Diese funktion benutzt die daten

