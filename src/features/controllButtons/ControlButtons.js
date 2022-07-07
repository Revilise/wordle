import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import WordleProcessor from '../../wordleProcessor/WordleProcessor'

import Button from "./Button/Button";
import {resetGame} from "../Game/GameReducer";
import {closePopup, showPopup} from "../Popup/PopupReducer";

let restartGame;
let showSettings;
let showRules;

function ControlButtonsAPI() {
    const theme = useSelector(state => state.game.theme);
    const dispatch = useDispatch();

    restartGame = () => {
        dispatch(resetGame());
        dispatch(closePopup());
        WordleProcessor.GenerateRandomWord();
    }
    showRules = () => {
        dispatch(
            showPopup({open: true, title: "Game rules", type: "rules"})
        );
    }
    showSettings = () => {
        dispatch(
            showPopup({open: true, title: "Settings", type: "settings"})
        );
    }
    function ControlButtons() {
        return (
            <div className={`control-container ${theme}-theme`}>
                <Rules/>
                <Restart/>
                <Settings/>
            </div>
        )
    }

    return <ControlButtons />
}

export const Restart = () => Button({
    children: "Restart",
    handler: restartGame
})
export const Settings = () => Button({
    children: "Settings",
    handler: showSettings
})
export const Rules = () => Button({
    children: "Rules",
    handler: showRules
})
export default ControlButtonsAPI;