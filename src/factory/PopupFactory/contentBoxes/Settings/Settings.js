import './Settings.css';

import {Theme} from "./Settings/Theme/Theme";
import Sound from "./Settings/Sound/Sound";
import {Difficulty} from "./Settings/Difficulty/Difficulty";

export default function Settings(props) {
    const {theme, sound, difficulty} = props.app;
    const {changeTheme, toggleSound, changeDifficulty} = props;

    return (
        <div className="settings-box">
            <Theme theme={theme} handler={changeTheme}/>
            <Sound theme={theme} handler={toggleSound} sound={sound}/>
            <Difficulty theme={theme} handler={changeDifficulty} difficulty={difficulty}/>
        </div>
    )
}