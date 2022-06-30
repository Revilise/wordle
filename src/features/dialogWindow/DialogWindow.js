import React from 'react'
import styled from "styled-components";

import closeLight from '../../assets/icons/close-light.svg';
import closeDark from '../../assets/icons/close-dark.svg';

import './DialogWindow.css';
import {useDispatch, useSelector} from "react-redux";
import {showWindow} from "./DialogWindowReducer";
import {PopupFactory, SettingsPopup, TextPopup} from "../../factory/PopupFactory/PopupFactory";
import {changeDifficulty, changeTheme} from "../../AppReducer";

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`

export default function DialogWindow() {
    const window = useSelector(state => state.window);
    const { theme, difficulty, sound } = useSelector(state => state.app);
    const dispatch = useDispatch();
    if (!window.open) {
        return <></>
    }

    const content = PopupFactory.createElem(window.type);

    if (TextPopup.prototype.isPrototypeOf(content)) {
        content.setProps({content: window.content});
    }
    else if (SettingsPopup.prototype.isPrototypeOf(content)) {
        content.setProps({
            app: { theme, difficulty, sound },
            changeDifficulty: (value) => dispatch(changeDifficulty(value)),
            changeTheme: (value) => dispatch(changeTheme(value))
        })
    }
    return (
        <div className={`window-container ${theme}-theme`}>
            <div className="window">
                <Close>
                    <input onClick={() => dispatch(showWindow(false))} type="image"
                           src={theme === "light" ? closeLight : closeDark} alt=""/>
                </Close>
                <h2 className="window_title">{window.title}</h2>
                {content.get()}
            </div>
        </div>
    )
}