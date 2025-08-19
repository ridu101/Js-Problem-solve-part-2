function maxNumber(number1, number2, number3){

    if (number1>=number2&& number1>= number3){
        return number1;
    }
    else if(number2>= number1&& number2>=number3){
        return number2;
    }
    else{
        return number3;
    }
}

const number= maxNumber(100,200,30);
console.log('The Maximum Number between Those Number is:', number);