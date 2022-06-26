import React from 'react';

import './App.css';

import Field from "./features/field/Field";
import ControlButtons from "./features/controllButtons/ControlButtons";
import DialogWindow from "./features/dialogWindow/DialogWindow";
import Keyboard from "./features/keyboard/Keyboard";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        return (
            <div className={`App ${this.props.theme}-theme`}>
                <div className="app-container">
                    <DialogWindow />
                    <ControlButtons />
                    <Field />
                    <Keyboard />
                </div>
            </div>
        );
    }
}

const MSTP = (state) => ({
    theme: state.app.theme
});
const MDTP = (dispatch) => ({})

export default connect(MSTP, MDTP)(App);
