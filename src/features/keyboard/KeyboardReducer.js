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
                return state;

            default:
                return state;
        }
    }
}

export default new Keyboard();