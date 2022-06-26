import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
    title: "",
    content: "",
    type: "",
}
const dialogWindow = createSlice({
    name: "window",
    initialState,
    reducers: {
        showWindow(state, action) {
            const {open, title, content, type} = action.payload;

            state.open = open;
            state.title = title || "default";
            state.content = content || "default";
            state.type = type || "тext"
        }
    }
})

export const { showWindow } = dialogWindow.actions;
export default dialogWindow.reducer;