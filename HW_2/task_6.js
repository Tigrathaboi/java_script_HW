const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];

function calculateTotalPrice(allProdcuts, productName) {
    for(let keys of allProdcuts){
        if(keys.name == productName) {
            return keys.price * keys.quantity;
        }
    }
}

console.log(calculateTotalPrice(products, 'Захват'));
console.log(calculateTotalPrice(products, 'Сканер'));

console.log(calculateTotalPrice(products, 'Радар')); // 5200
console.log(calculateTotalPrice(products, 'Дроид')); // 2800