
function cheapestPhone(phones) {
    let min= phones[0];
    for (const item of phones){
        if( item.camera< min.camera){
            min=item;
        }
    }
    return min;

}

const phones = [
    { name: 'samsung', price: 10000, camera: 120, color: 'black' },
    { name: 'xiaomi', price: 20000, camera: 60, color: 'black' },
    { name: 'oppo', price: 30000, camera: 52, color: 'black' },
    { name: 'realme', price: 15000, camera: 12, color: 'black' },
    { name: 'i-phone', price: 100000, camera: 16, color: 'black' },

];

const cheap= cheapestPhone(phones);

console.log('Cheapest phn is:',cheap);