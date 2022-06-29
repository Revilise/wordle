import React from 'react';

import WordleProcessor from '../../wordleProcessor/WordleProcessor'

import Button from "./Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {showWindow} from "../dialogWindow/DialogWindowReducer";
import {resetReducer} from "../field/FieldReducer";
import {resetKeyState} from "../keyboard/KeyboardReducer";

let restartGame;
let showSettings;
let showRules;

function ControlButtonsAPI() {
    const theme = useSelector(state => state.app.theme);
    const dispatch = useDispatch();

    restartGame = () => {
        dispatch(showWindow({open: false}));
        dispatch(resetReducer());
        dispatch(resetKeyState());
        WordleProcessor.GenerateRandomWord();
    }
    showRules = () => {
        dispatch(
            showWindow({open: true, title: "Game rules", type: "rules"})
        );
    }
    showSettings = () => {
        dispatch(
            showWindow({open: true, title: "Settings", type: "settings"})
        );
    }
    function ControlButtons() {
        return (
            <div className={`control-container ${theme}-theme`}>
                <Settings/>
                <Restart/>
                <Rules/>
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