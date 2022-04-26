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
    CheckWordExistance(word) {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        return words.includes(word);
    }
}

const processor = new WordleProcessor();
processor.GenerateRandomWord();
