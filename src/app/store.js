import {combineReducers, createStore} from 'redux';
import App from "../AppReducer";
import Field from "../features/field/FieldReducer";

const rootReducer = combineReducers({
  field: Field.reducer,
  app: App.reducer,
})

export const store = createStore(rootReducer);