import React from 'react';
import {connect} from "react-redux";
import {RestartButton} from "./restartButton/RestartButton";
import {RulesButton} from "./rulesButton/RulesButton";
import {SettingsButton} from "./settingsButton/SettingsButton";
import {resetFieldActionCreator} from '../field/FieldReducer';
import {resetKeyboardActionCreator} from '../keyboard/KeyboardReducer';

class ControlButtons extends React.Component {

    constructor(props) {
        super(props);

        this.Restart = RestartButton;
        this.Rules = RulesButton;
        this.Settings = SettingsButton;

        this.restartGame = this.restartGame.bind(this);
        this.openRules = this.openRules.bind(this);
        this.openSettings = this.openSettings.bind(this);
    }

    restartGame() {
        this.props.resetField();
        this.props.resetKeyboard();
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
}
function MapStateToProps(state) {
    return {}
}
function MapDispatchToProps(dispatch) {
    return {
        resetField: () => dispatch(resetFieldActionCreator()),
        resetKeyboard: () => dispatch(resetKeyboardActionCreator()),
    }
}

export default connect(MapDispatchToProps, MapDispatchToProps)(ControlButtons)