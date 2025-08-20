// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


function lowest(numbers) {
    let min = numbers[0];
    for (const number of numbers) {

        if (number < min) {
            min = number;
        }
    }
    return min;

}

const result = lowest([50, 20, 52, 63, 72, 150]);
console.log('the Lowest Number is:', result);