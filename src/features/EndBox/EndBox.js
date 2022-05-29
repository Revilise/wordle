import ControlButtons from "../controllButtons/ControlButtons";
import WordleProcessor from "../../wordleProcessor/WordleProcessor";

const defeat =  "defeat-component";
const win = "win-component";

function EndBox(state) {
    return (
        <div className="end-box">
            {
                state === defeat
                ? <p>secret word is {WordleProcessor.getSecret()}</p>
                : <p>let's try again!</p>
            }
            <ControlButtons.Restart />
        </div>
    )
}

EndBox.Defeat = () => EndBox(defeat);
EndBox.Win = () => EndBox(win);

export default EndBox;