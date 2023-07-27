// Assignment 3 | COMP 1073 Client-Side Javascript

/* Variables
-------------------------------------------- */

const orderDesc = document.querySelector("#orderDesc");
const studentId = document.querySelector("#studentId");
const order = document.querySelector("#order");

class Pizza {

    // Create constructor
    constructor(pizza_size, pizza_crust, pizza_sauce_amt, pizza_sauce, pizza_cheese){
        this.pizza_size = document.getElementById("size").value;
        this.pizza_crust = document.getElementById("crust").value;
        this.pizza_sauce_amt = document.getElementById("sauce_amount").value;
        this.pizza_sauce = document.getElementById("sauce").value;
        this.pizza_cheese = document.getElementById("cheese").value;
        
        // Create array for toppings
        let pizza_toppings = [];
        let toppings_array = document.querySelectorAll('input[type="checkbox"]')
        toppings_array.forEach(function(checkbox) {
            if (checkbox.checked) {
                pizza_toppings.push(checkbox.value);
            }
        });

        this.pizza_toppings = pizza_toppings;
    };
}

let order1 = new Pizza();

// Display pizza order in the P element when Order button is clicked.
description = function() {
    orderDesc.textContent = `You have ordered a ${order1.pizza_size} pizza with a ${order1.pizza_crust} crust and ${order1.pizza_sauce_amt} ${order1.pizza_sauce} sauce. The type of cheese on the pizza will be ${order1.pizza_cheese} and the topping(s) will be ${order1.pizza_toppings}. Sounds delicious!`;
    studentId.textContent = "Order sent to: Sarah Fisher, Student ID: 200498940";
}

// Event Listener
order.addEventListener("click", description);