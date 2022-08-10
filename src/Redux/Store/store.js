import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../Cart/cartSlice";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)