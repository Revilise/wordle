const fs = require('fs');
class WordleProcessor {
    secret_word;
    constructor() {}

    GenerateRandomWord() {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        const random_idx = Math.floor(Math.random() * words.length);
        this.secret_word = words[random_idx];
    }
    CheckCorrectness() {
        // return array of matched letters
        //[{letter: "a", corstat: "yellow" }]
    }
    CheckWordExistance() {
        // return boolean isExist in vocabulary
    }
}

const processor = new WordleProcessor();
processor.GenerateRandomWord();
console.log(processor.secret_word);



// const word = JSON.parse(words);
// console.log(word)