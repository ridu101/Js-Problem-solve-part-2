

function totalSalaryProvided(salary){
    let totalSalary=0;
    for ( const amount of salary){

        const currentSalary= amount.starting+(amount.increment*amount.experience);
        totalSalary= totalSalary+currentSalary;
     
        
    }
    return totalSalary;

}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const result= totalSalaryProvided(employees);
console.log('Total Salary Provided By the company is: ', result);