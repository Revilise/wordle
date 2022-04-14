import React from 'react';

import {Restart} from "./restart/Restart";
import {Rules} from "./rules/Rules";
import {Settings} from "./settings/Settings";

export class ControllButtons extends React.Component {
    constructor() {
        super();
        this.Restart = Restart;
        this.Rules = Rules;
        this.Settings = Settings;
    }
}