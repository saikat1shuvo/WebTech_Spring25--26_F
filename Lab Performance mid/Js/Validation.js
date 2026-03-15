const unitPrice = 1000;
const days = 30;

const quantity = document.getElementById("quantity");
const total = document.getElementById("total");

quantity.addEventListener("input", function(){

    let qty = parseInt(quantity.value);

    if(qty < 0 || isNaN(qty)){
        qty = 0;
        quantity.value = 0;
        alert("Quantity cannot be negative");
    }

    let totalPrice = unitPrice * qty * days;

    total.value = totalPrice;

    if(totalPrice > 1000){
        alert("You are eligible for a Gift Coupon!");
    }

});
