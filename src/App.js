import React from 'react';
import styled from 'styled-components';
import './App.css';

import Keyboard from "./features/keyboard/Keyboard";
import Field from "./features/field/Field";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

class App extends React.Component {
  render() {
    return (
        <Container>
            <Keyboard />
            <Field />
        </Container>
    );
  }
}

export default App;
