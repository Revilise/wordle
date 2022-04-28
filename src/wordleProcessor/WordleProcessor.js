const fs = require('fs');

/*
*   This module encapsulates secret_word variable.
*   You can access to secret_word only by calling getSecret().
 */

function WordleProcessor() {
    const getSecret = () => {
        return this.secret_word;
    }
    const GenerateRandomWord = () => {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        const random_idx = Math.floor(Math.random() * words.length);
        this.secret_word = words[random_idx];
    }
    const CheckCorrectness = (word) => {
        if (word) {
            const word_chars = word.split('');
            const secretWord_chars = this.secret_word.split('');

            return word_chars.map((letter, idx) => {
                const result = {letter};
                if (secretWord_chars[idx] === letter) result.position = "right";
                else if (secretWord_chars.includes(letter)) result.position = "exists";
                else result.position = "none";

                return result;
            })
        }
        return [];
    }
    const CheckWordExistence = (word) => {
        const words = JSON.parse(fs.readFileSync('vocabulary.json'));
        return words.includes(word);
    }
    return { getSecret, GenerateRandomWord, CheckCorrectness, CheckWordExistence }
}

export default new WordleProcessor();