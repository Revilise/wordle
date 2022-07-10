import './Rules.css'
import Cell from "../../../../features/field/Cell/Cell";

export default function Rules() {
    return (
        <div className="rules-box">
            <p>
                Guess the WORDLE in some tries.
                Each guess must be a valid five-letter word. Hit the enter button to submit.
                After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>

            <div className="rules-box_example">
                <Cell.Container>
                    { "SMILE".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass={letter === "S" ? "all-match" : "no-match"}>
                            {letter}
                        </Cell>
                    ))}
                </Cell.Container>
                <p>letter S is on right position in secret word.</p>
            </div>

            <div className="rules-box_example">
                <Cell.Container>
                    { "ENJOY".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass={letter === "J" ? "exists" : "no-match"}>
                            {letter}
                        </Cell>
                    ))}
                </Cell.Container>
                <p>Letter J is exists in secret word, but position is wrong.</p>
            </div>

            <div className="rules-box_example">
                <Cell.Container>
                    { "HAPPY".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass="no-match">
                            {letter}
                        </Cell>
                    ))}
                </Cell.Container>
                <p>Gray cells display that such letters don't exist in secret word.</p>
            </div>
        </div>
    )
}