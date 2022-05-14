import React from 'react';

import './App.css';

import Field from "./features/field/Field";
import ControlButtons from "./features/controllButtons/ControlButtons";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ControlButtons/>
                <Field/>
            </div>
        );
    }
}

export default App;
