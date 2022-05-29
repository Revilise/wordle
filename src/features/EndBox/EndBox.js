import ControlButtons from "../controllButtons/ControlButtons";
import WordleProcessor from "../../wordleProcessor/WordleProcessor";

const defeat =  "defeat-component";
const win = "win-component";

function copy(string) {
    navigator.clipboard.writeText(`WORDLE WIN\n${string[0]}x${string[1]}`).then(r => alert("result copied"));
}

function EndBox(state, winInfo) {
    return (
        <div className="end-box">
            {
                state === defeat && state
                ? <p>secret word is {WordleProcessor.getSecret()}</p>
                :
                <>
                    <p>let's try again!</p>
                    <button onClick={() => copy(winInfo)}>copy result</button>
                </>
            }
            <ControlButtons.Restart />
        </div>
    )
}

EndBox.Defeat = () => EndBox(defeat);
EndBox.Win = (winInfo) => EndBox(win, winInfo);

export default EndBox;