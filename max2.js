// find maximum between two numbers

function maxNum(number1, number2){
    if (number1> number2){
        return number1;
    }
    else{
        return number2;
    }
}



const result = maxNum(10,20);
const ultramx= maxNum(result, 30);
console.log('The Maximum Number is:', ultramx);