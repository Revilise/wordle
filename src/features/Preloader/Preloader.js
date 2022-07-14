import classes from './Preloader.module.scss'
import {useSelector} from "react-redux";

export default function Preloader() {
    const theme = useSelector(state => state.game.theme);
    return (
        <div className={`${classes.preloader} ${classes[theme]}`}>
            <h1 className={classes.title}>WORDLE</h1>
        </div>
    )
}