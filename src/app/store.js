import {configureStore} from "@reduxjs/toolkit";

import GameReducer from "../features/Game/GameReducer";
import PopupReducer from "../features/Popup/PopupReducer";

const store = configureStore({reducer: {
    game: GameReducer,
    popup: PopupReducer,
  }})
export default store;