import React from 'react';
import './ControlButtons.css'
import { connect } from "react-redux";
import WordleProcessor from '../../wordleProcessor/WordleProcessor'

import Rules from "./Rules/Rules";
import Restart from "./Restart/Restart";

import {resetFieldActionCreator} from '../field/FieldReducer';
import {showWindowActionCreator} from "../dialogWindow/DialogWindowReducer";
import {resetKeyboardActionCreator} from "../keyboard/KeyboardReducer";
import RulesBox from "../RulesBox/RulesBox";
import Settings from "./Settings/Settings";
import SettingsBox from "../SettingsBox/SettingsBox";

let showWindow = () => {};
let resetField = () => {};
let resetKeys = () => {};

function restartGame() {
    showWindow({open: false});
    resetField();
    resetKeys();
    WordleProcessor.GenerateRandomWord();
}
function showRules() {
    showWindow({ open: true, title: "Game rules", content: RulesBox });
}
function showSettings() {
    showWindow({ open: true, title: "Settings", content: () => <SettingsBox /> });
}

class ControlButtons extends React.Component {
    constructor(props) {
        super(props);
        showWindow = (obj) => this.props.showWindow(obj);
        resetField = () => this.props.resetField();
        resetKeys = () => this.props.resetKeys();
    }

    render() {
        return (
            <div className={`control-container ${this.props.theme}-theme`}>
                <Rules handler={showRules}/>
                <Restart handler={restartGame} />
                <Settings handler={showSettings}/>
            </div>
        )
    }
}

// MapStateToProps & MapDispatchToProps
const MSTP = (state) => ({
    theme: state.app.theme
});
const MDTP = (dispatch) => ({
    resetField: () => dispatch(resetFieldActionCreator()),
    showWindow: (obj) => dispatch(showWindowActionCreator(obj)),
    resetKeys: () => dispatch(resetKeyboardActionCreator()),
})

const ConnectedControlButtons  = connect(MSTP, MDTP)(ControlButtons)
ConnectedControlButtons.Restart = () => Restart({handler: () => {
    showWindow({open: false});
    resetField();
    resetKeys();
    WordleProcessor.GenerateRandomWord();
    }});
export default ConnectedControlButtons;
