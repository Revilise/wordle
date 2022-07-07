import {useDispatch, useSelector} from "react-redux";

import FieldContainer from "../field/FieldContainer";
import Keyboard from "../keyboard/KeyboardContainer";
import {closePopup} from "../Popup/PopupReducer";
import ControlButtons from "../controllButtons/ControlButtons";
import Popup from "../Popup/PopupContainer";

import './Game.css'

export default function Game() {

    const theme = useSelector(state => state.game.theme);
    const dispatch = useDispatch();

    function closePopups(e) {
        if (e.key === 'Escape') dispatch(closePopup());
    }

    return (
        <div onKeyDown={closePopups} className={`game ${theme}-theme`}>
            <div className="game-container">
                <Popup />
                <ControlButtons />
                <FieldContainer />
                <Keyboard />
            </div>
        </div>
    )
}