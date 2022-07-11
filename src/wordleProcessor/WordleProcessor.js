import vocab from './vocabulary.json'

/*
*   This module encapsulates secret_word variable.
*   You can access to secret_word only by calling getSecret().
 */

function WordleProcessor() {
    const getSecret = () => {
        return this.secret_word;
    }
    const GenerateRandomWord = () => {
        const random_idx = Math.floor(Math.random() * vocab.length);
        this.secret_word = vocab[random_idx];
        if (window.location.href === "http://localhost:3000/") { // dev host
            console.log(this.secret_word); // <-- debug
        }

    }
    const CheckCorrectness = (word) => {
         if (word) {
            const word_chars = word.split('');
            const secretWord_chars = this.secret_word.split('');

            return word_chars.map((letter, idx) => {
                const result = {letter};
                if (secretWord_chars[idx] === letter) result.position = "allMatch";
                else if (secretWord_chars.includes(letter)) result.position = "exists";
                else result.position = "noMatch";

                return result;
            })
        }
        return {};
    }
    const CheckWordExistence = (word) => {
        return vocab.includes(word);
    }
    return { getSecret, GenerateRandomWord, CheckCorrectness, CheckWordExistence }
}
const processor = new WordleProcessor();
processor.GenerateRandomWord();

export default processor;