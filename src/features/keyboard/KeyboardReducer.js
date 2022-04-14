import {actionTypes} from "../../app/action-types";

class Keyboard {
    _init = {
        green_keys: [],
        yellow_keys: [],
        gray_keys: []
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            case actionTypes.CHANGE_KEYS_STATE:
                // TODO: complete action
                return { ...state };

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
}

export default new Keyboard();