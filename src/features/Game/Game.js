import {useDispatch, useSelector} from "react-redux";

import Field from "../field/FieldContainer";
import {closePopup} from "../Popup/PopupReducer";
import Popup from "../Popup/PopupContainer";

import './Game.module.scss'
import Header from "../Header/Header";
import classes from './Game.module.scss';
import {refocusCell} from "./GameReducer";

export default function Game() {

    const theme = useSelector(state => state.game.theme);
    const dispatch = useDispatch();

    function closePopups(e) {
        if (e.key === 'Escape') dispatch(closePopup());
    }
    return (
        <div onKeyDown={closePopups} className={`${classes.game} ${classes[theme]}`}>
            <div className={classes.game_container}>
                <Popup />
                <Header />
                <Field />
            </div>
        </div>
    )
}