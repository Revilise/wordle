import {useDispatch, useSelector} from "react-redux"

import Button from "../Button/Button"
import {showPopup} from "../Popup/PopupReducer";
import RestartButton from "../RestartButton/RestartButton";
import classes from './Header.module.scss'
import Rules from "../Icons/Rules";
import Settings from "../Icons/Settings";

export default function Header() {
    const theme = useSelector(state => state.game.theme)
    const dispatch = useDispatch();
    const showRules = () => {
        dispatch(
            showPopup({open: true, title: "Game rules", type: "rules"})
        );
    }
    const showSettings = () => {
        dispatch(
            showPopup({open: true, title: "Settings", type: "settings"})
        );
    }

    return (
        <header className={classes.header}>
            <h1 className={classes.header_logo}>WORDLE</h1>
            <div className={classes.header_btns}>
                <Button handler={showRules}>
                    <Rules theme={theme} />
                </Button>
                <RestartButton/>
                <Button handler={showSettings}>
                    <Settings theme={theme} />
                </Button>
            </div>
        </header>
    )
}