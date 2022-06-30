import './Settings.css';

import {Theme} from "./Settings/Theme/Theme";
import {Difficulty} from "./Settings/Difficulty/Difficulty";

export default function Settings(props) {
    const {theme, difficulty} = props.app;
    const {changeTheme, changeDifficulty} = props;

    return (
        <div className="settings-box">
            <Theme theme={theme} handler={changeTheme}/>
            <Difficulty theme={theme} handler={changeDifficulty} difficulty={difficulty}/>
        </div>
    )
}