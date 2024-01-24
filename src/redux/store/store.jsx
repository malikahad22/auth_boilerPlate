import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice/counterSlice';
import todoReducer from '../todoSlice/todoSlice';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage:storageSession,
}


const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

