// function findAveragePhonePrice(phones) {
//     if (phones.length === 0) {
//         return 0; // Return 0 if the array is empty to avoid division by zero
//     }

//     // Calculate the sum of all phone prices
//     const totalPrices = phones.reduce((sum, phone) => sum + phone.price, 0);

//     // Calculate the average price
//     const averagePrice = totalPrices / phones.length;

//     return averagePrice;
// }

// // Example usage:
// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// const averagePhonePrice = findAveragePhonePrice(phones);

// console.log("Average phone price:", averagePhonePrice);


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


function average(phones){
    let sum = 0
    for(const phone of phones){
        sum = sum + phone.price
    };
    const avg = sum / phones.length
    return avg
}

const result = average(phones);
console.log(result)