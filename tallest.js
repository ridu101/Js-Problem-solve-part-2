

function getMax(numbers){
    let max= numbers[0];
    for (const number of numbers){
        if(number> max){
            max= number;
        }
    }

    return max;

}

const numbers=[60,65,74,52,89,63,69];
const result= getMax(numbers);
console.log('The Maximum Number is: ', result);