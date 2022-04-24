import {actionTypes} from "../../app/action-types";

class Field {
    _init = {
        input: [],
        focused_row: 0,
        try_number: 0,
        row_values: [],
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // change established inputs values
            case actionTypes.CHANGE_INPUT_VALUE:
                state.input[action.row] = action.value.trim().substring(0, 5);
                return {...state, input: [...state.input]};

            // change current row values
            case actionTypes.CHANGE_ROW_VALUE:
                state.row_values[action.index] = action.value;
                return {...state, row_values: [...state.row_values]}

            // reset current row value
                // TODO: row_values is mutable. Fix it :v
            case actionTypes.RESET_CURRENT_ROW_VALUES:
               return {...state, row_values: []}

            // refocuse row
            case actionTypes.CHANGE_FOCUSED_ROW:
                return {...state, focused_row: action.index}

            default: return state;
        }
    }

    saveRowActionCreator = (value, row) => ({
        type: actionTypes.CHANGE_INPUT_VALUE,
        value, row
    })
    clearCurrentRowActionCreator = () => ({
        type: actionTypes.RESET_CURRENT_ROW_VALUES,
    })
    refocuseRowActionCreator = (index) => ({
        type: actionTypes.CHANGE_FOCUSED_ROW,
        index
    })
    changeRowValuesActionCreator = (value, index) => ({
        type: actionTypes.CHANGE_ROW_VALUE,
        value, index
    })
}

const FieldReducer = new Field();

export const {
    saveRowActionCreator,
    clearCurrentRowActionCreator,
    changeRowValuesActionCreator,
    refocuseCellActionCreator,
    refocuseRowActionCreator} = FieldReducer;

export default FieldReducer;
