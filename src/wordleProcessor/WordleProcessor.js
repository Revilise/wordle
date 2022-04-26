const fs = require('fs');
class WordleProcessor {
    secret_word;
    constructor() {}

    GenerateRandomWord() {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        const random_idx = Math.floor(Math.random() * words.length);
        this.secret_word = words[random_idx];
    }
    CheckCorrectness(word) {
        word_chars = word.split('');
        secretWord_chars = this.secret_word.split('');
        // нужен алгоритм, который проверит и верность позиции, и существование в слове

        // [{
        //     letter: "a", position: "right" || "exist" || "none"
        // }]

    }
    CheckWordExistance(word) {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        return words.includes(word);
    }
}

const processor = new WordleProcessor();
processor.GenerateRandomWord();
