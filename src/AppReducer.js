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
    changeThemeActionCreator
} = app;

export default app.reducer;