import {actionTypes} from "../../app/action-types";

class Field {
    _init = {
        input: [],
        focused_row: 0,
        try_number: 0,
        row_values: [],
        focused_cell: 0,
        isWindowShowed: false,
        correctness_rows: []
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

            // refocuse cell
            case actionTypes.REFOCUSE_CURRENT_CELL:
                return {...state, focused_cell: action.index}

            case actionTypes.RESET_REDUCER:
                // TODO: reset all
                // !!!! init is mutable !!!!
                return {...this._init}

            // show/hide window with error
            case actionTypes.SHOW_ERROR_WINDOW:
                return {...state, isWindowShowed: action.value}

            // fill correctness schema
            case actionTypes.FILL_CORRECTNESS:
                const cor = JSON.parse(JSON.stringify(state.correctness_rows));

                const { index, array } = action;
                cor.push(Object.create(null));
                array.forEach(el => {
                    if (!cor[index][el.position]) cor[index][el.position] = [];
                    cor[index][el.position].push(el.letter)
                })
                return {...state, correctness_rows: cor};

            default:
                return state;
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
    changeCurrentCellindexActionCreator = (index) => ({
        type: actionTypes.REFOCUSE_CURRENT_CELL,
        index
    })
    resetFieldActionCreator = () => ({
        type:  actionTypes.RESET_REDUCER
    })
    showWindowActionCreator = (value) => ({
        type: actionTypes.SHOW_ERROR_WINDOW,
        value
    })
    noteCorrectnessActionCreator = (array, index) => ({
        type: actionTypes.FILL_CORRECTNESS,
        array, index
    })
}

const FieldReducer = new Field();

export const {
    saveRowActionCreator,
    clearCurrentRowActionCreator,
    changeRowValuesActionCreator,
    changeCurrentCellindexActionCreator,
    refocuseRowActionCreator,
    showWindowActionCreator,
    noteCorrectnessActionCreator,
    resetFieldActionCreator } = FieldReducer;

export default FieldReducer;
