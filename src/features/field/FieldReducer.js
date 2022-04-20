import {actionTypes} from "../../app/action-types";

class Field {
    _init = {
        input: "",
        row_index: 0,
        try_number: 0,
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // TODO: complete reducer
            case actionTypes.CHANGE_INPUT_VALUE:
                return {...state, input: action.input};

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
const FieldReducer = new Field();

export const {inputChangeActionCreator, clearInputActionCreator} = FieldReducer;
export default FieldReducer;