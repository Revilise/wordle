import React from 'react';
import styled from 'styled-components';

import './App.css';

import Keyboard from "./features/keyboard/Keyboard";
import Field from "./features/field/Field";
import ControlButtons from "./features/controllButtons/ControllButtons";

const Div = styled.div`
  width: 960px;
  margin: 0 auto;
`

class App extends React.Component {
    render() {
        return (
            <Div className="App">
                <ControlButtons/>
                <Field/>
                <Keyboard/>
            </Div>
        );
    }
}

export default App;
