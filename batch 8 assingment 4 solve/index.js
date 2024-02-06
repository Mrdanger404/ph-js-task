

// problem 1;

function calledMindGame(inputNumber){
    const multiPly = inputNumber * 3;
    const sum = multiPly + 10;
    const divide = sum / 2;
    const result = divide - 5
    return result
}

const mindGame = calledMindGame(5);
console.log('problem 1',mindGame);

// problem 2;

function EvenOdd(inputString){
    const character = inputString.split('');

    if(character.length % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
};

const resultEvenOdd = EvenOdd('hello');
console.log('problem 2', resultEvenOdd);

// problem 3;

function IsLGSeven(inputNumber){
    const sub = inputNumber - 7;

    if(7 > sub){
        return sub
    } else{
        const multiply = inputNumber * 2;
        console.log(multiply)
        return multiply
    }
};

const resultIsLGSeven = IsLGSeven(15);

console.log('problem 3',resultIsLGSeven);


function FindingBadData(data){
    let badDataCount = 0;

    for (const badData of data) {
        if(badData < 0){
            badDataCount++
        }
    };

    return badDataCount
};

const FindingBadDataArray = [2, -3, 4, -5, -6]

const resultFindingBadData = FindingBadData(FindingBadDataArray);
console.log('problem 4',resultFindingBadData);


// problem 5;

const firstPerson = 21;
const secondPerson = 32;
const thirdPerson = 43;

function GemsToDiamond(person1, person2, person3){
    const person1Diamond = person1 * firstPerson;
    const person2Diamond = person2 * secondPerson;
    const person3Diamond = person3 * thirdPerson;
    
    const total = person1Diamond + person2Diamond + person3Diamond;


    if(2000 < total){
        const sub = total - 2000;
        return sub
    } else{
        return total
    }
};

const resultGemsToDiamond = GemsToDiamond(20,200,50);
console.log(resultGemsToDiamond)

