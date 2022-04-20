import {combineReducers, createStore} from 'redux';
import Keyboard from "../features/keyboard/KeyboardReducer";
import App from "../AppReducer";
import Field from "../features/field/FieldReducer";

const rootReducer = combineReducers({
  keyboard: Keyboard.reducer,
  field: Field.reducer,
  app: App.reducer,
})

export const store = createStore(rootReducer);