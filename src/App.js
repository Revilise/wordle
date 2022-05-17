import React from 'react';

import './App.css';

import Field from "./features/field/Field";
import ControlButtons from "./features/controllButtons/ControlButtons";
import DialogWindow from "./features/dialogWindow/DialogWindow";
import Keyboard from "./features/keyboard/Keyboard";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <DialogWindow />
                <ControlButtons/>
                <Field/>
                <Keyboard />
            </div>
        );
    }
}

export default App;
