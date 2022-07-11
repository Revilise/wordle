import classes from './NumericUpDown.module.scss'

function NumericUpDown({children}) {
    return (
        <div className={classes.numUpDown}>
            {children}
        </div>
    )
}
NumericUpDown.Button = ({children, handler}) => {
    return <button onClick={handler} className={classes.button}>{children}</button>

}
NumericUpDown.Field = ({children}) => {
    return <div className={classes.field}>{children}</div>
}

export default NumericUpDown;