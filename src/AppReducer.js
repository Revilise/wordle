import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: "light",
    sound: false,
    difficulty: 5
}

const app = createSlice({
    name: "app",
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.theme = action.payload
        },
        toggleSound(state) {
            state.sound = !state.sound
        },
        changeDifficulty(state, action) {
            state.difficulty = action.payload;
        }
    }
})

export const { changeTheme, toggleSound, changeDifficulty } = app.actions;
export default app.reducer;