import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';
import WordleProcessor from '../../wordleProcessor/WordleProcessor'

import {resetFieldActionCreator} from '../field/FieldReducer';

class ControlButtons extends React.Component {

    constructor(props) {
        super(props);

        this.Restart = styled.button``;
        this.Rules = styled.button``;
        this.Settings = styled.button``;

        this.restartGame = this.restartGame.bind(this);
        this.openRules = this.openRules.bind(this);
        this.openSettings = this.openSettings.bind(this);
    }

    restartGame() {
        this.props.resetField();
        WordleProcessor.GenerateRandomWord();
    }
    openRules() {
        // TODO: complete open rules function
    }
    openSettings() {
        // TODO: complete open settings function
    }

    render() {
        return (
            <div>
                <this.Restart onClick={this.restartGame}>RESTART</this.Restart>
                <this.Rules onClick={this.openRules} />
                <this.Settings onClick={this.openSettings} />
            </div>
        )
    }

    Buttons = () => ({
        Restart = this.Restart;
        Rules = this.Rules;
        Settings = this.Settings;
    })

}

function MapStateToProps(state) {
    return {}
}
function MapDispatchToProps(dispatch) {
    return {
        resetField: () => dispatch(resetFieldActionCreator()),
    }
}

export default connect(MapDispatchToProps, MapDispatchToProps)(ControlButtons)