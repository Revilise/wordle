import {actionTypes} from "../../app/action-types";
import Field from "./Field";

class Field {
    _init = {
        input: null,
        row_index: 0,
        try_number: 0,
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // TODO: complete reducer
            case actionTypes.CHANGE_KEYS_STATE:
                // TODO: complete action
                return {...state};

            default: return state;
        }
    }

    inputChangeActionCreator = (value) => ({
        type: actionTypes.CHANGE_INPUT_VALUE,
        value
    })

    clearInputActionCreator = () => ({
        type: actionTypes.CLEAR_INPUT_VALUE,
    })
}

export default new Field();