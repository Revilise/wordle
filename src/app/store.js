import {configureStore} from "@reduxjs/toolkit";

import FieldReducer from "../features/field/FieldReducer";
import AppReducer from "../AppReducer";
import dialogWindowReducer from "../features/dialogWindow/DialogWindowReducer";
import keyboardReducer from "../features/keyboard/KeyboardReducer"

const store = configureStore({reducer: {
    field: FieldReducer,
    app: AppReducer,
    window: dialogWindowReducer,
    keyboard: keyboardReducer
  }})
export default store;