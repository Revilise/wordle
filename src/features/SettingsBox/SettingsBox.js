import {connect} from "react-redux";
import './SettingsBox.css';
import {changeThemeActionCreator, toggleSoundActionCreator} from "../../AppReducer";

import {Theme} from "./Settings/Theme/Theme";
import Sound from "./Settings/Sound/Sound";

function SettingsBox({ theme, changeTheme, sound, toggleSound, difficulty }) {
    console.log(sound)
    return (
        <div className="settings-box">
            <Theme theme={theme} handler={changeTheme}/>
            <Sound theme={theme} handler={toggleSound} sound={sound}/>
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
    toggleSound: () => dispatch(toggleSoundActionCreator())

})
export default connect(MSTP, MDTP)(SettingsBox);