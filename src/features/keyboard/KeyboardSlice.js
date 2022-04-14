import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    green_keys: [],
    yellow_keys: [],
    gray_keys: []
}

export const KeyboardSlice = createSlice({
    name: 'keyboard',
    initialState,
    reducers: {

    }
});

export const { } = KeyboardSlice.actions;

export default KeyboardSlice.reducer;