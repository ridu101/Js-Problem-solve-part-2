// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function findSmallest(names){
    
    let smallest= names[0];
    for( const string of names){
        if (string.length < smallest.length){
            smallest=string; 

        }
    }
    return smallest;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const result = findSmallest(heights2);
console.log('Smallest name is :', result);