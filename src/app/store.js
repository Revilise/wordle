import {combineReducers, createStore} from 'redux';
import FieldReducer from "../features/field/FieldReducer";
import AppReducer from "../AppReducer";
import dialogWindowReducer from "../features/dialogWindow/DialogWindowReducer";
import keyboardReducer from "../features/keyboard/KeyboardReducer"

const rootReducer = combineReducers({
  field: FieldReducer,
  app: AppReducer,
  window: dialogWindowReducer,
  keyboard: keyboardReducer
})

export const store = createStore(rootReducer);