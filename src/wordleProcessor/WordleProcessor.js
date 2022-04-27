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
        if (word) {
            const word_chars = word.split('');
            const secretWord_chars = this.secret_word.split('');

            return word_chars.map((letter, idx) => {
                const result = { letter };
                if (secretWord_chars[idx] === letter) result.position = "right";
                else if (secretWord_chars.includes(letter)) result.position = "exists";
                else result.position = "none";

                return result;
            })
        }
        return [];
    }
    CheckWordExistance(word) {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        return words.includes(word);
    }
}

export default const processor = new WordleProcessor();