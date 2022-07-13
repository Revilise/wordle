import classes from './Preloader.module.scss'

export default function Preloader() {
    return (
        <div className={classes.preloader}>
            <h1 className={classes.title}>WORDLE</h1>
        </div>
    )
}