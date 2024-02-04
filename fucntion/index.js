const num = [];
const numbers = [12,98,41,5,10,15,20,40];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i]%2 === 0){
        console.log(numbers[i]);
        num.push(numbers[i])
    }
}

console.log(num)