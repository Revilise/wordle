import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import keyboardReducer from '../features/keyboard/KeyboardSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    keyboard: keyboardReducer
  },
});
