const sentence = 'I am learning Programming to become a programmer';

function checkWord(sentence){
    const word = sentence.split(' ');

    let longestWord = '';

    for(const wordTest of word){
        if(wordTest.length > longestWord.length){
            longestWord = wordTest
        }
    }

    return longestWord

}

const result = checkWord(sentence);
console.log(result)