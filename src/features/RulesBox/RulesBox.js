import './RulesBox.css'
import {Cell, Container} from "../field/row/Row";

export default function RulesBox() {
    return (
        <div className="rules-box">
            <p>
                Guess the WORDLE in some tries.
                Each guess must be a valid five-letter word. Hit the enter button to submit.
                After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>

            <Container className="rules-box_example">
                { "SMILE".split('').map((letter, idx) => (
                    <Cell key={idx} className={letter === "S" ? "item-cell__all-matched" : "item-cell__no-match"}>
                        {letter}
                    </Cell>
                ))}
                <p>letter S is on right position in secret word</p>
            </Container>

            <Container className="rules-box_example">
                { "ENJOY".split('').map((letter, idx) => (
                    <Cell key={idx} className={letter === "J" ? "item-cell__exists" : "item-cell__no-match"}>
                        {letter}
                    </Cell>
                ))}
            </Container>

            <Container className="rules-box_example">
                { "HAPPY".split('').map((letter, idx) => (
                    <Cell key={idx} className="item-cell__no-match">
                        {letter}
                    </Cell>
                ))}
            </Container>
        </div>
    )
}