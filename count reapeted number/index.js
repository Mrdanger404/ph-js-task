// output will 2

const numbers = [5,6,11,12,98, 5];

function repeatNumber(repeatCheck,numbers){
    let repeat = 0
    for(const number of numbers){
        if(number === repeatCheck){
            repeat++
        }
    }
    return repeat
}



const countNumber = repeatNumber(5,numbers);

console.log(countNumber)

// ----------------------------------------------------------

const numbers2 = [5,6,11,12,98, 5];


function repeatNumber2(repeatCheck, numbers2) {
    let repeat = 0;
    for(const number of numbers2){
        if(number === repeatCheck){
            repeat++
        }
    }
    return repeat
};


const countNumber2 = repeatNumber2(25, numbers2);

console.log(countNumber2)