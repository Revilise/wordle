import {Restart} from "../../../../features/controllButtons/ControlButtons";
import WordleProcessor from "../../../../wordleProcessor/WordleProcessor";
import './End.css';

export function EndDefeat() {
    return (
        <div className="end-box">
            <p>secret word is <b>{WordleProcessor.getSecret()}</b></p>
            <Restart />
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
            <div className="control-btn">
                <button onClick={copy}>copy result</button>
            </div>
            <Restart />
        </div>
    )
}