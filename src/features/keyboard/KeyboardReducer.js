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

    reducer(state = this._init, action) {
        switch (action.type) {
            // change key's color state
            case actionTypes.CHANGE_KEYS_STATE:
                // TODO: complete action
                return {...state};

            // reset reducer
            case actionTypes.RESET_KEYBOARD_REDUCER:
                // !!!! init is mutable !!!!
                return {...this._init}
            default:
                return state;
        }
    }

    keysChangeStateActionCreator = (letter, destination) => ({
        type: actionTypes.CHANGE_KEYS_STATE, letter, destination
    })
    resetKeysStateActionCreator = () => ({
        type: actionTypes.RESET_KEYS_STATE
    })
    resetKeyboardActionCreator = () => ({
        type: actionTypes.RESET_KEYBOARD_REDUCER
    })
}

const keydoardReducer = new Keyboard();

export const { keysChangeStateActionCreator,
    resetKeysStateActionCreator,
    resetKeyboardActionCreator } = keydoardReducer;

export default keydoardReducer;