import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
    difficulty: 5
}

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.theme = action.payload
        },
        changeDifficulty(state, action) {
            state.difficulty = action.payload;
        }
    }
})

export const { changeTheme, changeDifficulty } = app.actions;
export default app.reducer;