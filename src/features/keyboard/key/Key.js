import classes from "../Keyboard.module.scss";

export function Key({letter, key_state, handler}) {
    return (
        <div onClick={handler} className={`${classes.key} ${classes[key_state]}`}>{letter}</div>
    )
}