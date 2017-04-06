var price;
var quantity;
var total;
var customer = "Iyke"


price = 5;
quantity = 14;
total = price * quantity;

var customers = document.getElementById("name");
var totals = document.getElementById("totalprice");
customers.textContent = customer;
totals.textContent = total;