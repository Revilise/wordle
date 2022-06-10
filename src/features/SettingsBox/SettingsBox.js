import {connect} from "react-redux";
import './SettingsBox.css';
import {changeDifficultyActionCreator, changeThemeActionCreator, toggleSoundActionCreator} from "../../AppReducer";

import {Theme} from "./Settings/Theme/Theme";
import Sound from "./Settings/Sound/Sound";
import {Difficulty} from "./Settings/Difficulty/Difficulty";

function SettingsBox({ theme, changeTheme, sound, toggleSound, difficulty, changeDifficulty }) {
    return (
        <div className="settings-box">
            <Theme theme={theme} handler={changeTheme}/>
            <Sound theme={theme} handler={toggleSound} sound={sound}/>
            <Difficulty theme={theme} handler={changeDifficulty} difficulty={difficulty}/>
        </div>
    )
}

const MSTP = (state) => ({
    theme: state.app.theme,
    sound: state.app.sound,
    difficulty: state.app.difficulty
})
const MDTP = (dispatch) => ({
    changeTheme: (theme) => dispatch(changeThemeActionCreator(theme)),
    toggleSound: () => dispatch(toggleSoundActionCreator()),
    changeDifficulty: (value) => dispatch(changeDifficultyActionCreator(value))

})
export default connect(MSTP, MDTP)(SettingsBox);