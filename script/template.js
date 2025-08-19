function mealTemplateToIndex(mealIndex) {
    return `

    
    <div class="product">
            <img class="foodImage" src="${meals[mealIndex].bild}" alt="">
            <div class="productInfo">  
                <h3>${meals[mealIndex].name}</h3>
                <p class="productext">• ${meals[mealIndex].beschreibung}</p>
                <div class="price"><span>${meals[mealIndex].preis.toFixed(2) + " €"}</span></div>
            </div>
            <button onclick="addToCart(${mealIndex})">+</button>
    </div>
    

 `
};

function cartTemplateToIndex (cartIndex) {
    const meal = cart[cartIndex];
    return `

  
        <div class="cart-item">
            <div class="cartName-Price">
                <h3>${meal.name}</h3>
                <p class="piece">${meal.preis.toFixed(2) + " €"}</p>
            </div>

            <div class="cart-quantity">
                    <button class="btn-quantity" onclick="increaseAmount(${cartIndex})">+</button>
                    <div class="quantity" id="quantity-${cartIndex}">${meal.quantity}</div>
                    <button class="btn-quantity" onclick="decreaseAmount(${cartIndex})">-</button>
                    <button class="btn-delet"onclick="cleanCartOnly(${cartIndex})"><img class="delete" src="assets/icon/trash.png" alt="junk"></button>
            </div>       
        </div>
        <div class="line-dividers"></div>
 
    `
};

