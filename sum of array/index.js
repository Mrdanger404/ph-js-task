const numbers = [20,10, 11, 25,25]

function sumOfNumbers(num) {
    let sum = 0
    for(const number of num){
        sum = sum + number
    }
    return sum
};

const data = sumOfNumbers(numbers);
console.log(data)