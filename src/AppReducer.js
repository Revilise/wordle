import {actionTypes} from "./app/action-types";

class App {
    constructor() {
        this._init = {
            theme: "light",
            sound: false,
            difficulty: 5
        }
        this.reducer = this.reducer.bind(this);
    }
    reducer(state = this._init, action) {
        switch (action.type) {
            case actionTypes.CHANGE_APP_THEME:
                return {...state, theme: action.theme }
            case actionTypes.TOGGLE_APP_SOUND:
                return {...state, sound: !state.sound }
            case actionTypes.CHANGE_APP_DIFFICULTY:
                return {...state, difficulty: action.difficulty}
            default: return state;
        }
    }
    changeThemeActionCreator = (theme) => ({
        type: actionTypes.CHANGE_APP_THEME,
        theme
    })
    toggleSoundActionCreator = () => ({
        type: actionTypes.TOGGLE_APP_SOUND
    })
    changeDifficultyActionCreator = (difficulty) => ({
        type:  actionTypes.CHANGE_APP_DIFFICULTY,
        difficulty
    })
}
const app = new App();

export const {
    changeThemeActionCreator,
    toggleSoundActionCreator,
    changeDifficultyActionCreator
} = app;

export default app.reducer;