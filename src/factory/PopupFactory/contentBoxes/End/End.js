import WordleProcessor from "../../../../wordleProcessor/WordleProcessor";
import RestartButton from "../../../../features/RestartButton/RestartButton";
import Button from "../../../../features/Button/Button";
import classes from './End.module.scss';

export function EndDefeat() {
    return (
        <div className={classes.container}>
            <p className={classes.text}>secret word is <b>{WordleProcessor.getSecret()}</b></p>
            <RestartButton />
        </div>
    )
}

export function EndWin ({winInfo}) {
    function copy() {
        navigator.clipboard.writeText(`WORDLE WIN\n${winInfo[0]}x${winInfo[1]}`).then(r => alert("result copied"));
    }
    return (
        <div className={classes.container}>
            <p className={classes.text}>let's try again!</p>
            <div className={classes.btn_container}>
                <Button handler={copy}>copy result</Button>
                <RestartButton />
            </div>
        </div>
    )
}