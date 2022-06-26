import './Rules.css'
import {Cell, Container} from "../../../../features/field/row/Row";

export default function Rules() {
    return (
        <div className="rules-box">
            <p>
                Guess the WORDLE in some tries.
                Each guess must be a valid five-letter word. Hit the enter button to submit.
                After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>

            <div className="rules-box_example">
                <Container>
                    { "SMILE".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass={letter === "S" ? "item-cell__all-matched" : "item-cell__no-match"}>
                            {letter}
                        </Cell>
                    ))}
                </Container>
                <p>letter S is on right position in secret word.</p>
            </div>

            <div className="rules-box_example">
                <Container>
                    { "ENJOY".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass={letter === "J" ? "item-cell__exists" : "item-cell__no-match"}>
                            {letter}
                        </Cell>
                    ))}
                </Container>
                <p>Letter J is exists in secret word, but position is wrong.</p>
            </div>

            <div className="rules-box_example">
                <Container>
                    { "HAPPY".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass="item-cell__no-match">
                            {letter}
                        </Cell>
                    ))}
                </Container>
                <p>Gray cells display that such letters don't exist in secret word.</p>
            </div>
        </div>
    )
}