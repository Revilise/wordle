import React from 'react';
import {RestartButton} from "./restartButton/RestartButton";
import {RulesButton} from "./rulesButton/RulesButton";
import {SettingsButton} from "./settingsButton/SettingsButton";

export default class ControlButtons extends React.Component {

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
        // TODO: complete restart game function
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
                <this.Restart onClick={this.restartGame} />
                <this.Rules onClick={this.openRules} />
                <this.Settings onClick={this.openSettings} />
            </div>
        )
    }
}