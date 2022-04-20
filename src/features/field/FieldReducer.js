import {actionTypes} from "../../app/action-types";

class Field {
    _init = {
        input: {row_0: "texta"},
        focused_row: 0,
        try_number: 0,
        focused_row: 0
    }

    constructor() {
        this.reducer = this.reducer.bind(this);
    }

    reducer(state = this._init, action) {
        switch (action.type) {
            // TODO: complete reducer
            case actionTypes.CHANGE_INPUT_VALUE:
                const key = "row_" + action.row;
                const updated = {...state.input};
                updated[key] =  action.value.trim().substring(0, 5);

                return {...state, input: updated};

            case actionTypes.CHANGE_FOCUSED_CELL:
                return {...state, focused_cell: action.value}
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

    refocuseCellActionCreator = (value) => ({
        type: actionTypes.CHANGE_FOCUSED_CELL,
    })
    refocuseRowActionCreator = (value) => ({
        type: actionTypes.CHANGE_FOCUSED_ROW,
    })
}

const FieldReducer = new Field();

export const {
    inputChangeActionCreator,
    clearInputActionCreator,
    refocuseCellActionCreator,
    refocuseRowActionCreator} = FieldReducer;

export default FieldReducer;
