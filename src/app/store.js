import {combineReducers, createStore} from 'redux';
import Keyboard from "../features/keyboard/KeyboardReducer";

const rootReducer = combineReducers({
  keyboard: Keyboard.reducer,
})

export const store = createStore(rootReducer);