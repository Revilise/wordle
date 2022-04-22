import {actionTypes} from "../../app/action-types";

class Field {
    _init = {
        input: {row_0: ""},
        focused_row: 0,
        try_number: 0,
        focused_row: 0,
        row_values: ["t", "e", "x", "t", "a"],
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // change established inputs values
            case actionTypes.CHANGE_INPUT_VALUE:
                const key = "row_" + action.row;
                const updated = {...state.input};
                updated[key] =  action.value.trim().substring(0, 5);
                return {...state, input: updated};
            // change current row values
            case actionTypes.CHANGE_ROW_VALUE:
                //const updated1 = state.row_values;
                state.row_values[action.index] = action.value;
                return {...state, row_values: [...state.row_values]}
            default: return state;
        }
    }

    inputChangeActionCreator = (value, row) => ({
        type: actionTypes.CHANGE_INPUT_VALUE,
        value, row
    })
    clearInputActionCreator = () => ({
        type: actionTypes.CLEAR_INPUT_VALUE,
    })
    refocuseRowActionCreator = (value) => ({
        type: actionTypes.CHANGE_FOCUSED_ROW,
    })
    changeRowValuesActionCreator = (value, index) => ({
        type: actionTypes.CHANGE_ROW_VALUE,
        value, index
    })
}

const FieldReducer = new Field();

export const {
    inputChangeActionCreator,
    clearInputActionCreator,
    changeRowValuesActionCreator,
    refocuseCellActionCreator,
    refocuseRowActionCreator} = FieldReducer;

export default FieldReducer;
