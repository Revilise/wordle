import {connect} from "react-redux";
import './SettingsBox.css';
import {Theme} from "./Settings/Theme/Theme";
import {changeThemeActionCreator} from "../../AppReducer";

function SettingsBox({ theme, changeTheme, sound, difficulty }) {
    return (
        <div className="settings-box">
            <Theme theme={theme} changeTheme={changeTheme}/>
        </div>
    )
}

const MSTP = (state) => ({
    theme: state.app.theme,
    sound: state.app.sound,
    difficulty: state.app.difficulty
})
const MDTP = (dispatch) => ({
    changeTheme: (theme) => dispatch(changeThemeActionCreator(theme))
})
export default connect(MSTP, MDTP)(SettingsBox);