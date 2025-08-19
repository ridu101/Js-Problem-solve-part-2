
function shoppingcart(products) {
    let total = 0;
    for (const item of products) {
        const itemTotal = item.price * item.quantity;
        total = total + itemTotal;
    }

    return total;
}
const item = [
    { name: 'shampoo', price: 300, quantity: 3 },
    { name: 'chiruni', price: 30, quantity: 2 },
    { name: 'hair dryer', price: 3000, quantity: 4 },
    { name: 'cosmetics', price: 5000, quantity: 1 },
    { name: 'shari', price: 200, quantity: 5 }
];
const result = shoppingcart(item);
console.log('Total Price:', result);