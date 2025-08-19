//  first 100------- 100tk
//  second 100 ------ 90 tk
// above 200 --------70 tk

function layerDiscountPrice(quantity){
    const firstHundredPrice = 100;
    const secondHundredPrice= 90;
    const thirdHundredPrice= 70;

    if ( quantity<= 100){

        const total= 100*firstHundredPrice; 
        return total;
    }

    else if(quantity<=200){
        const first100Total= 100*firstHundredPrice;
        const remainingQuantity= quantity-100;
        const remainingQuantityPrice= remainingQuantity*secondHundredPrice;
        const total= remainingQuantityPrice+first100Total;
        return total;
    }
    else{
        const first100Price= 100*firstHundredPrice;
        const secondHundredPrice= 100*secondHundredPrice;
        const remainingQuantity= quantity-200;
        const remainingQuantityPrice= remainingQuantity* thirdHundredPrice;
        const total= first100Price+secondHundredPrice+remainingQuantityPrice;
        return total;

    }
}

const quantity= 101;
const disPrice= layerDiscountPrice(quantity);
console.log('Discounted Price:', disPrice);