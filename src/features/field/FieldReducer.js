import {createSlice} from "@reduxjs/toolkit";
import {copy} from "../../app/alias";

const initialState = {
    input: [],
    focused_row: 0,
    try_number: 0,
    row_values: [],
    focused_cell: 0,
    isWindowShowed: false,
    correctness: []
}
const field = createSlice({
    name: "field",
    initialState,
    reducers: {
        changeInputValue(state, action) {
            state.input[state.focused_row] = action.payload.trim().substring(0, 5);
        },
        changeCurrentRowValue(state, action) {
            state.row_values[state.focused_cell] = action.payload;
        },
        resetCurrentRow(state) {
            state.row_values = copy(initialState.row_values)
        },
        resetReducer(state) {
            let init = copy(initialState);
            for (let key in init) {
                state[key] = init[key];
            }
        },
        refocusCell(state, action) {
            console.log(state.focused_cell, action.payload)
            state.focused_cell = action.payload;
        },
        refocusRow(state, action) {
            state.focused_row = action.payload;
        },
        changeTryNumber(state) {
            state.try_number = state.try_number + 1;
        },
        fillCorrectness(state, action) {
            const cor = copy(state.correctness);

            const correctness = action.payload;
            const index = state.focused_row;

            cor.push(Object.create(null));
            correctness.forEach(el => {
                if (!cor[index][el.position]) cor[index][el.position] = [];
                cor[index][el.position].push(el.letter)
            })
            state.correctness = action.payload;
        }
    }
});
export const {
    changeInputValue,
    changeCurrentRowValue,
    resetCurrentRow,
    resetReducer,
    refocusCell,
    refocusRow,
    changeTryNumber,
    fillCorrectness,
} = field.actions;
export default field.reducer;
