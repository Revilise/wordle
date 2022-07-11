import classes from './Button.module.scss'

export default function Button({handler, children}) {
    return (
        <div className={classes.button_container}>
            <button className={classes.button} onClick={handler}>{children}</button>
        </div>
    )
}