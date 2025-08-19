

function getMin(numbers){
    let min= numbers[0];
    for (const number of numbers){
        if (number < min){
            min= number;
        }
    }
    return min;
}

const prices =[1000,200,3300,1551,2500,3600,541];
const cheap= getMin(prices);
console.log('Minimum Number is:', cheap);
