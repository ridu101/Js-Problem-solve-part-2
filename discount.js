function discountedPrice(quantity) {
    let total = 0;
    if (quantity <= 100) {
        total = quantity * 100;
        return total;

    }
    else if (quantity <= 200) {
        total = quantity * 90;
        return total;
    }
    else {
        total = quantity * 70;
        return total;
    }

}

const quanity=201;
const disPrice= discountedPrice(quanity);
console.log(' The Discounted price is: ', disPrice);