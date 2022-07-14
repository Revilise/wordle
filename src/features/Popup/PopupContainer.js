import React from 'react'

import {useDispatch, useSelector} from "react-redux";
import {PopupFactory, SettingsPopup, TextPopup, WinPopup} from "../../factory/PopupFactory/PopupFactory";
import {Popup} from "./Popup";
import {closePopup} from "./PopupReducer";

export default function PopupContainer() {
    const game = useSelector(state => state.game);
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
            content.setProps({game})
        }
        else if (WinPopup.prototype.isPrototypeOf(content)) {
            content.setProps({winInfo: [game.try, game.difficulty]})
        }
        return content.get();
    }

    return <Popup title={popup.title} theme={game.theme} content={getContent()} onClick={onClick}/>
}