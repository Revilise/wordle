import React from 'react';
import './App.css';

import Keyboard from "./features/keyboard/Keyboard";
import Field from "./features/field/Field";
import ControlButtons from "./features/controllButtons/ControllButtons";

class App extends React.Component {


    render() {
        return (
            <div className="App">
                <ControlButtons/>
                <Keyboard/>
                <Field/>
            </div>
        );
    }
}

export default App;
