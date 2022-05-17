import React from 'react';
import './ControlButtons.css'

import { connect } from "react-redux";
import WordleProcessor from '../../wordleProcessor/WordleProcessor'

import {resetFieldActionCreator} from '../field/FieldReducer';
import Restart from "./Restart/Restart";
import {showWindowActionCreator} from "../dialogWindow/DialogWindowReducer";
import wordleProcessor from "../../wordleProcessor/WordleProcessor";
import {resetKeyboardActionCreator} from "../keyboard/KeyboardReducer";

let showWindow = () => {};
let resetField = () => {};
let resetKeys = () => {};

function restartGame() {
    showWindow({open: false});
    resetField();
    resetKeys();
    WordleProcessor.GenerateRandomWord();
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
            <div className="control-container">
                <Restart handler={restartGame} />
            </div>
        )
    }
}

// MapStateToProps & MapDispatchToProps
const MSTP = (state) => ({});
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
    wordleProcessor.GenerateRandomWord();
    console.log("updated")
    }});
export default ConnectedControlButtons;
