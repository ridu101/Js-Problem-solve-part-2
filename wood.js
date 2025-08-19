 
 function woodQuantity(chairQuantity, tableQuantity, bedQuantity){

    const perChairWood= 3;
    const perTableWood= 10;
    const perBedWood= 50;

    const totalChairWood= chairQuantity*perChairWood;
    const totalTableWood= tableQuantity* perTableWood;
    const totalBedWood = bedQuantity* perBedWood;
    
    const totalWoodQuantity= totalChairWood+totalBedWood+totalTableWood;
    return totalWoodQuantity; 
 }


 const result= woodQuantity(10,5,3);
 console.log('Sir !! Your Total Wood Needed: ', result, 'CFT');