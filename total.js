// shopping cart summation

function totalPrice(prices){
    let sum=0;
    for(const price of prices){
        sum= sum+ price.price;
    }
    return sum;
}

const pricesOfItem=[
    {name:'shampoo', price: 300},
    {name:'chiruni', price: 30},
    {name:'hair dryer', price: 3000},
    {name:'cosmetics', price: 5000},
    {name:'shari', price: 200}
];

const result= totalPrice(pricesOfItem);
console.log('Total Price: ', result);