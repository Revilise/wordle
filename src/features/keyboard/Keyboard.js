import {Key} from "./key/Key";
import classes from "./Keyboard.module.scss";
import Button from "../Button/Button";
import backspaceLight from '../../assets/light-theme/backspace-light.svg';
import backspaceDark from '../../assets/dark-theme/backspace-dark.svg';

export default function Keyboard({getKeyState, KeyClickHandler, keys, theme, keyDownHandler}) {
    const row1 = keys.filter((el, idx) => idx < 9);
    const row2 = keys.filter((el, idx) => idx > 8 && idx < 19)
    const row3 = keys.filter((el, idx) => idx > 18)

    const KeyWrap = ({idx, children}) => (
        <Key handler={KeyClickHandler} key={idx} letter={children} key_state={getKeyState(children)}/>
    )

    return (
        <div className={classes.keyboard}>
            <div className={classes.row}>
                {row1.map((key, idx) => <KeyWrap key={idx} idx={idx} children={key}/>)}
            </div>
            <div className={classes.row}>
                {row2.map((key, idx) => <KeyWrap key={idx} idx={idx} children={key}/>)}
            </div>
            <div className={classes.row}>
                <div className={classes.btn}>
                    <Button handler={(e) => keyDownHandler({key: 'Enter'})}>ENTER</Button>
                </div>
                {row3.map((key, idx) => <KeyWrap key={idx} idx={idx} children={key}/>)}
                <div className={classes.btn}>
                    <Button handler={(e) => keyDownHandler({key: 'Backspace'})}>
                        <img width={34.11} height={22} src={theme === "theme__light" ? backspaceLight : backspaceDark} alt="backspace"/>
                    </Button>
                </div>
            </div>
            <div className={classes.rowForAdaptive}>
                <Button handler={(e) => keyDownHandler({key: 'Enter'})}>ENTER</Button>
                <Button handler={(e) => keyDownHandler({key: 'Backspace'})}>
                    <img width={34.11} height={22} src={theme === "theme__light" ? backspaceLight : backspaceDark} alt="backspace"/>
                </Button>
            </div>
        </div>
    )
}