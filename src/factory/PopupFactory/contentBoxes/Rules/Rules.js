import Cell from "../../../../features/field/Cell/Cell";
import classes from "./Rules.module.scss";

export default function Rules() {
    return (
        <div className={classes.rules}>
            <p className={classes.text}>
                Guess the WORDLE in some tries.
                Each guess must be a valid five-letter word. Hit the enter button to submit.
                After each guess, the color of the tiles will change to show how close your guess was to the word.
            </p>

            <div className={classes.example}>
                <p className={classes.text}>Letter S is on right position in secret word.</p>
                <Cell.Container>
                    { "SMILE".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass={letter === "S" ? "all-match" : "no-match"}>
                            {letter}
                        </Cell>
                    ))}
                </Cell.Container>
            </div>

            <div className={classes.example}>
                <p className={classes.text}>Letter J is exists in secret word, but position is wrong.</p>
                <Cell.Container>
                    { "ENJOY".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass={letter === "J" ? "exists" : "no-match"}>
                            {letter}
                        </Cell>
                    ))}
                </Cell.Container>
            </div>

            <div className={classes.example}>
                <p className={classes.text}>Gray cells display that such letters don't exist in secret word.</p>
                <Cell.Container>
                    { "HAPPY".split('').map((letter, idx) => (
                        <Cell key={idx} recolorClass="no-match">
                            {letter}
                        </Cell>
                    ))}
                </Cell.Container>
            </div>
        </div>
    )
}