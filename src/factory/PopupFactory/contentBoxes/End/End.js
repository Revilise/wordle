import ControlButtons from "../../../../features/controllButtons/ControlButtons";
import WordleProcessor from "../../../../wordleProcessor/WordleProcessor";
import './End.css';

const defeat =  "defeat-component";
const win = "win-component";

function End({state, winInfo}) {
    function copy(string) {
        navigator.clipboard.writeText(`WORDLE WIN\n${string[0]}x${string[1]}`).then(r => alert("result copied"));
    }
    return (
        <div className="end-box">
            {
                state === defeat && state
                ? <p>secret word is <b>{WordleProcessor.getSecret()}</b></p>
                :
                <>
                    <p>let's try again!</p>
                    <div className="control-btn">
                        <button onClick={() => copy(winInfo)}>copy result</button>
                    </div>
                </>
            }
            { ControlButtons.Restart ? <ControlButtons.Restart /> : <></> }
        </div>
    )
}

End.Defeat = () => <End state={defeat} />;
End.Win = (winInfo) => <End state={win} winInfo ={winInfo} />;

export default End;