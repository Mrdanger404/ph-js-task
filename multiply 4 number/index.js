const numbers = [2,3,7,1,3,10];

function multiplyNum(num){
    let multiply = 1;
    for(const number of num){
        multiply = number * multiply
    }
    return multiply
}

const result = multiplyNum(numbers);

// console.log(result)

// task 2

function task2(num){
    for(const number of num){
        if(number % 2 ===0){
            const divide = number / 2;
            console.log('divide of even number ',divide)
        } else{
            const multiply = number * 2;
            console.log('multiply of odd number ',multiply)
        }
    }
}

task2(numbers)