import './Settings.css';

import {Difficulty} from "./Settings/Difficulty/Difficulty";
import Switch from "../../../../features/Switch/Switch";

export default function Settings(props) {
    const {theme, difficulty} = props.app;
    const {changeTheme, changeDifficulty} = props;

    const toggleTheme = () => {
        changeTheme(theme === "theme__light" ? "theme__dark" : "theme__light")
    }
    return (
        <div className="settings-box">
            <Switch checked={theme === "theme__dark"} handler={toggleTheme}/>
            <Difficulty theme={theme} handler={changeDifficulty} difficulty={difficulty}/>
        </div>
    )
}