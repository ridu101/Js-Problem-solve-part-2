// Your task is to calculate the total budget required to buy electronics:
//     laptop = 35000 tk
// tablet = 15000 tk
// mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.


function calculateElectronicBudget(number, name){

    const eachLaptop = 35000;
    const eachTablet = 15000;
    const eachMobile = 20000;

    let sum=0;

    if( name ==='laptop'){
         const quantityPrice = eachLaptop * number;
         sum= quantityPrice;
         return sum;

    }
    else if( name === 'tablet'){
        const quantityPrice= eachTablet*number;
        sum= quantityPrice;
        return sum;
    }
    else if(name === 'mobile'){
        const quantityPrice= eachMobile*number;
        sum= quantityPrice;
        return sum;
    }
    else{
        console.log('You can enter only laptop,mobile and tablet');
    }
    

    

}

const names= 'tablet';
const result= calculateElectronicBudget(2, 'tablet');
console.log('Your Budget will be for', names ,':',result);
