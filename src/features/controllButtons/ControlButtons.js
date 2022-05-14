import React from 'react';
import './ControlButtons.css'

import { connect } from "react-redux";
import WordleProcessor from '../../wordleProcessor/WordleProcessor'

import {resetFieldActionCreator, showWindowActionCreator} from '../field/FieldReducer';
import Restart from "./Restart/Restart";

let showWindow = () => {};
let resetField = () => {};

function restartGame() {
    showWindow(false);
    resetField();
    WordleProcessor.GenerateRandomWord();
}

class ControlButtons extends React.Component {
    constructor(props) {
        super(props);
        showWindow = () => this.props.showWindow();
        resetField = () => this.props.resetField();
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
    showWindow: (bool, title, content) => dispatch(showWindowActionCreator(bool, title, content)),
})

const ConnectedControlButtons  = connect(MSTP, MDTP)(ControlButtons)
ConnectedControlButtons.Restart = () => Restart({handler: resetField});
export default ConnectedControlButtons;
