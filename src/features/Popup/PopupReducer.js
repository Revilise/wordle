import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    open: false,
    title: "",
    content: "",
    type: "",
}
const Popup = createSlice({
    name: "popup",
    initialState,
    reducers: {
        showPopup(state, action) {
            const {title, content, type} = action.payload;

            state.open = true;
            state.title = title || "default";
            state.content = content || "default";
            state.type = type || "text"
        },
        closePopup(state) {
            state.open = false;
        }
    }
})

export const { showPopup, closePopup } = Popup.actions;
export default Popup.reducer;