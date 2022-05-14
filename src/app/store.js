import {combineReducers, createStore} from 'redux';
import FieldReducer from "../features/field/FieldReducer";
import AppReducer from "../AppReducer";
import dialogWindowReducer from "../features/dialogWindow/DialogWindowReducer";

const rootReducer = combineReducers({
  field: FieldReducer,
  app: AppReducer,
  window: dialogWindowReducer,
})

export const store = createStore(rootReducer);