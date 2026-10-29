// 1 full price, 0.5 half off from promo disc
var discount = 1;

// adds up every item still in the cart, then applies the discount
function updateTotal() {
    var items = document.querySelectorAll(".cart-item");
    var total = 0;

    for (var i = 0; i < items.length; i++) {
        total = total + Number(items[i].dataset.price);
    }

    total = total * discount;

    document.getElementById("cart-total").textContent = total.toFixed(2);
}

function removeItem(button) {
    button.closest(".cart-item").remove();
    updateTotal();
}

// valid or not valid promo code heh
function applyPromo() {
    var code = document.getElementById("promo-input").value.trim();
    var button = document.getElementById("promo-btn");

    if (code == "54321") {
        discount = 0.5;
        button.textContent = "Code valid, 50% off!!";
    } else {
        discount = 1;
        button.textContent = "Code invalid";
    }

    updateTotal();
}

// changes the buy button text
function buyNow() {
    document.getElementById("buy-btn").textContent = "haha silly goose u thought";
}

// runs once when the page loads so total shows right away
updateTotal();