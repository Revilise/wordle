import React from 'react';
import './App.css';

import Keyboard from "./features/keyboard/Keyboard";
import Field from "./features/field/Field";

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Keyboard />
            <Field />
        </div>
    );
  }
}

export default App;
