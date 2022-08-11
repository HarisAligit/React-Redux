//store.js
import {createStore, combineReducers, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../Reducer/reducer";
import thunk from "redux-thunk";
import { PURGE } from "redux-persist";

const configureStore = (initialState = {}) => {
  const reducer = combineReducers({
    auth: () => ({ mock: true}),
    form: persistReducer(
      {
        key: "form", // key for localStorage key, will be: "persist:form"
        storage,
        debug: true,
        blacklist: ["foo"],
      },
      rootReducer
    ),
    // extraReducers: (builder) => {
    //   builder.addCase(PURGE, (state) => {
    //     customEntityAdapter.removeAll(state);
    //   });
    // }
  }
);

  const store = createStore(
    persistReducer(
      {
        key: "root",
        debug: true,
        storage,
        whitelist: ["auth"],
      },
      reducer,
    ),
    initialState,
    applyMiddleware(thunk),
  );

  console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log("restoredState", store.getState());
  });

  return { store, persistor };
};

export default configureStore;
