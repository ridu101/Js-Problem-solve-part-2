function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function sub(num1, num2) {
    const difference = num1 - num2;
    return difference;
}

function mul(num1, num2) {
    const product = num1 * num2;
    return product;
}

function div(num1, num2) {
    const division = num1 / num2;
    return division;
}

function calculator(a, b, operation) {

    if (operation === 'addition') {
        const result = add(a, b);
        return result;
    }
    else if (operation === 'subtraction') {
        const result = sub(a, b);
        return result;
    }
    else if (operation === 'mul') {
        const result = mul(a, b);
        return result;
    }
    else if (operation === 'div') {
        const result = div(a, b);
        return result;
    }
    else {
        console.log('Only sum,sub,mul,div available !!')
    }

}


const result = calculator(5,7,'div')
console.log('The result is :',result);