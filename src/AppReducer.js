import {actionTypes} from "./app/action-types";

class App {
    constructor() {
        this._init = {
            theme: "default",
            sound: false,
            difficulty: 5
        }

        this.reducer = this.reducer.bind(this);
    }
    reducer(state = this._init, action) {
        switch (action.type) {


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

export default app.reducer;