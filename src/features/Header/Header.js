import {useDispatch, useSelector} from "react-redux"
import darkRules from '../../assets/dark-theme/rules-icon__dark.svg'
import lightRules from '../../assets/light-theme/rules-icon__light.svg'
import darkSettings from '../../assets/dark-theme/settings-icon__dark.svg'
import lightSettings from '../../assets/light-theme/settings-icon__light.svg'

import Button from "../Button/Button"
import {showPopup} from "../Popup/PopupReducer";
import RestartButton from "../RestartButton/RestartButton";
import classes from './Header.module.scss'

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
                    <img src={theme === "theme__light" ? lightRules : darkRules} alt="show rules"/>
                </Button>
                <RestartButton/>
                <Button handler={showSettings}>
                    <img src={theme === "theme__light" ? lightSettings : darkSettings} alt="show settings"/>
                </Button>
            </div>
        </header>
    )
}