import classes from './Settings.module.scss';

import {Difficulty} from "./Settings/Difficulty/Difficulty";
import Switch from "../../../../features/Switch/Switch";
import Item from "./SettingsItem";

export default function Settings(props) {
    const {theme, difficulty} = props.app;
    const {changeTheme, changeDifficulty} = props;

    const toggleTheme = () => {
        changeTheme(theme === "theme__light" ? "theme__dark" : "theme__light")
    }
    return (
        <div className={classes.settings}>
            <Item>
                <Item.Description label="Dark theme">
                    Switch theme into dark or light.
                </Item.Description>
                <Item.Tool>
                    <Switch checked={theme === "theme__dark"} handler={toggleTheme}/>
                </Item.Tool>
            </Item>
            <Item>
                <Item.Description label="Difficulty">
                    How many tries do you need to guess the secret word.
                </Item.Description>
                <Item.Tool>
                    <Difficulty handler={changeDifficulty} difficulty={difficulty}/>
                </Item.Tool>
            </Item>
        </div>
    )
}

