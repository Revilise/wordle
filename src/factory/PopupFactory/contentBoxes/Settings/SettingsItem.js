import classes from "./Settings.module.scss";

function SettingsItem({children}) {
    return (
        <div className={classes.item}>
            {children}
        </div>
    )
}
SettingsItem.Tool = ({children}) => {
    return (
        <div className={classes.tool}>
            {children}
        </div>
    )
}
SettingsItem.Description = ({label, children}) => {
    return (
        <div className={classes.label}>
            {label}
            <span className={classes.span}>{children}</span>
        </div>
    )
}
export default SettingsItem;