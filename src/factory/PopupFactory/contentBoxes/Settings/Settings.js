import classes from './Settings.module.scss';

import Switch from "../../../../features/Switch/Switch";
import Item from "./SettingsItem";
import NumericUpDown from "../../../../features/NumericUpDown/NumericUpDown";

export default function Settings(props) {
    const {theme, difficulty, minDifficulty, maxDifficulty} = props.app;
    const {changeTheme, changeDifficulty} = props;

    const toggleTheme = () => {
        changeTheme(theme === "theme__light" ? "theme__dark" : "theme__light")
    }
    const IncrementDifficulty = () => {
        if (difficulty < maxDifficulty) changeDifficulty(difficulty + 1);
    }
    const DecrementDifficulty = () => {
        if (difficulty > minDifficulty) changeDifficulty(difficulty - 1);
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
                    <NumericUpDown>
                        <NumericUpDown.Button handler={DecrementDifficulty} children={"-"} />
                        <NumericUpDown.Field children={difficulty}/>
                        <NumericUpDown.Button handler={IncrementDifficulty} children={"+"} />
                    </NumericUpDown>
                </Item.Tool>
            </Item>
            <span className={classes.footer}>Developed by @Revilise</span>
        </div>
    )
}

