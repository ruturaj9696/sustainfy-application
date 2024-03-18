import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/UserSlice';
import AdminReducer from './user/AdminSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({ 
  user: userReducer,
  admin: AdminReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false // This disables serializability check globally
    })
});

export const persistor = persistStore(store);
