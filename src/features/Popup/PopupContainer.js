import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {PopupFactory, SettingsPopup, TextPopup, WinPopup} from "../../factory/PopupFactory/PopupFactory";
import {Popup} from "./Popup";
import {changeDifficulty, changeTheme} from "../Game/GameReducer";
import {closePopup} from "./PopupReducer";

export default function PopupContainer() {
    const { theme, difficulty } = useSelector(state => state.game);
    const try_ = useSelector(state => state.game.try);
    const popup = useSelector(state => state.popup);
    const dispatch = useDispatch();

    if (!popup.open) {
        return <></>
    }

    function onClick() {
        dispatch(closePopup())
    }

    function getContent() {
        const content = PopupFactory.createElem(popup.type);

        if (TextPopup.prototype.isPrototypeOf(content)) {
            content.setProps({content: popup.content});
        }
        else if (SettingsPopup.prototype.isPrototypeOf(content)) {
            content.setProps({
                app: { theme, difficulty },
                changeDifficulty: (value) => dispatch(changeDifficulty(value)),
                changeTheme: (value) => dispatch(changeTheme(value))
            })
        }
        else if (WinPopup.prototype.isPrototypeOf(content)) {
            content.setProps({winInfo: [try_, difficulty]})
        }
        return content.get();
    }

    return <Popup title={popup.title} theme={theme} content={getContent()} onClick={onClick}/>
}