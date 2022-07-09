import classes from './Switch.module.scss'

export default function Switch({handler, checked}) {
    return (
        <div onClick={handler} className={`${classes.switch} ${checked ? classes.active : ''}`}>
            <input onChange={() => {}} checked={checked} className={classes.switch_checkbox} type="checkbox" />
            <span className={classes.switch_slider} />
        </div>
    )
}