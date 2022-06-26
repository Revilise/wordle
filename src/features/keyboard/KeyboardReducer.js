import {copy, deleteDoubles} from "../../app/alias";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    green_keys: [],
    yellow_keys: [],
    gray_keys: [],
}

const keyboard = createSlice({
    name: "keyboard",
    initialState,
    reducers: {
        changeKeyState(state, action) {
            action.payload.forEach(el => {
                switch (el.position) {
                    case "noMatch":
                        state.gray_keys.push(el.letter)
                        state.gray_keys = deleteDoubles(state.gray_keys);
                        break;
                    case "allMatch":
                        state.green_keys.push(el.letter);
                        state.green_keys = deleteDoubles(state.green_keys);
                        break;
                    case "exists":
                        state.yellow_keys.push(el.letter);
                        state.yellow_keys = deleteDoubles(state.yellow_keys);
                        break;
                    default:
                        throw new Error("unknown type of position");
                }
            })
            return state;
        },
        resetKeyState(state) {
            state = copy(initialState);
        }
    }
})

export const { changeKeyState, resetKeyState } = keyboard.actions;

export default keyboard.reducer;