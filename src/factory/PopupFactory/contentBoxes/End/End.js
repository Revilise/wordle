import WordleProcessor from "../../../../wordleProcessor/WordleProcessor";
import RestartButton from "../../../../features/RestartButton/RestartButton";
import Button from "../../../../features/Button/Button";
import './End.css';

export function EndDefeat() {
    return (
        <div className="end-box">
            <p>secret word is <b>{WordleProcessor.getSecret()}</b></p>
            <RestartButton />
        </div>
    )
}

export function EndWin ({winInfo}) {
    function copy() {
        navigator.clipboard.writeText(`WORDLE WIN\n${winInfo[0]}x${winInfo[1]}`).then(r => alert("result copied"));
    }
    return (
        <div className="end-box">
            <p>let's try again!</p>
            <Button handler={copy}>copy result</Button>
            <RestartButton />
        </div>
    )
}