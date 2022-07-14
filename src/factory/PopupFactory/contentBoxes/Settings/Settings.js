import classes from './Settings.module.scss';

import Switch from "../../../../features/Switch/Switch";
import Item from "./SettingsItem";
import NumericUpDown from "../../../../features/NumericUpDown/NumericUpDown";
import {useDispatch} from "react-redux";
import {changeDifficulty, changeTheme, toggleKeyboardVisibility} from "../../../../features/Game/GameReducer";

export default function Settings(props) {

    const game = props.game;
    const {theme, difficulty, minDifficulty, maxDifficulty, isKeyboardVisible} = game;
    const dispatch = useDispatch();

    const toggleTheme = () => {
        const savedTheme = theme === "theme__light" ? "theme__dark" : "theme__light"
        document.cookie = `theme=${savedTheme}`;
        dispatch(changeTheme(savedTheme));
    }
    const IncrementDifficulty = () => {
        if (difficulty < maxDifficulty) dispatch(changeDifficulty(difficulty + 1));
    }
    const DecrementDifficulty = () => {
        if (difficulty > minDifficulty) dispatch(changeDifficulty(difficulty - 1));
    }
    const changeKeyboardVisibility = () => {
        dispatch(toggleKeyboardVisibility())
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
            <Item>
                <Item.Description label="keyboard visibility">
                    Hide/show visibility of virtual keyboard.
                </Item.Description>
                <Item.Tool>
                    <Switch checked={isKeyboardVisible} handler={changeKeyboardVisibility}/>
                </Item.Tool>
            </Item>
            <span className={classes.footer}>Developed by @Revilise</span>
        </div>
    )
}

