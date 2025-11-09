// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    // WRITE YOUR CODE HERE
    for (const dish of dishData) {
        let finalPrice;
        if (taxBoolean) {
            finalPrice = dish.price * tax;
        } else if(!taxBoolean) {
            finalPrice = dish.price ;
        } else {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log("Dish", dish, "Price $", finalPrice  );
    }
}
// getPrices(true);

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
    // WRITE YOUR CODE HERE
    
    if (typeof (guests) === 'number' && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        } else {
             console.log("The second argument must be a number between 0 and 30");
        }
        getPrices(taxBoolean)
        console.log("Discount is: $" ,discount);
    }
}

// Call getDiscount() with sample arguments
getDiscount(true, 2);
getDiscount(false, 10);