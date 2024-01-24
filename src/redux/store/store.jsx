import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice/counterSlice';  
import todoReducer from '../todoSlice/todoSlice'; 

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
