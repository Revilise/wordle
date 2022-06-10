import {actionTypes} from "../../app/action-types";

class Keyboard {
    _init = {
        green_keys: [],
        yellow_keys: [],
        gray_keys: [],
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    deleteDoubles = (array) => {
        return array.filter((el, idx, self) => self.indexOf(el) === idx);
    }
    copy = (array) => JSON.parse(JSON.stringify(array));
    reducer(state = this.copy(this._init), action) {
        switch (action.type) {
            case actionTypes.CHANGE_KEYS_STATE:
                action.correctness.forEach(el => {
                    switch (el.position) {
                        case "noMatch":
                            state.gray_keys.push(el.letter)
                            state.gray_keys = this.deleteDoubles(state.gray_keys);
                            break;
                        case "allMatch":
                            state.green_keys.push(el.letter);
                            state.green_keys = this.deleteDoubles(state.green_keys);
                            break;
                        case "exists":
                            state.yellow_keys.push(el.letter);
                            state.yellow_keys = this.deleteDoubles(state.yellow_keys);
                            break;
                        default: break;
                    }
                });
                return {...state};

            case actionTypes.RESET_KEYBOARD_REDUCER:
                return {...this.copy(this._init)}
            default:
                return state;
        }
    }

    keysChangeStateActionCreator = (correctness) => ({
        type: actionTypes.CHANGE_KEYS_STATE, correctness
    })
    resetKeysStateActionCreator = () => ({
        type: actionTypes.RESET_KEYS_STATE
    })
    resetKeyboardActionCreator = () => ({
        type: actionTypes.RESET_KEYBOARD_REDUCER
    })
}

const keyboardReducer = new Keyboard();
export const {
    keysChangeStateActionCreator,
    resetKeysStateActionCreator,
    resetKeyboardActionCreator
} = keyboardReducer;

export default keyboardReducer.reducer;