const sentence = 'Write a function to count the number of vowels in a string.';

function findVowel(sentence){
    const splitSentence = sentence.toLowerCase().split('');
    
    let vowelCount = 0
    for(const vowel of splitSentence ){
        
        // vowel.includes('a') || vowel.includes('e') || vowel.includes('i') || vowel.includes('o') || vowel.includes('u')
        if(/a|e|i|o|u/.test(vowel)){
            vowelCount++;
        };
    }
    

    return vowelCount
}

const vowel = findVowel(sentence);
console.log(vowel)