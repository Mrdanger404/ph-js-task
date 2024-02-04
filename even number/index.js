const numbers = [20,5,10,9,6,8];

function evenNum(num) {
    const evenArray = []
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 === 0){
            evenArray.push(num[i])
        }
    }

    return evenArray
}

const data = evenNum(numbers);
console.log(data)