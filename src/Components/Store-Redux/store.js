//store.js
// import { createStore, combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "../Reducer/reducer";
import { counterSlice } from "../ReduxTookKit/ReduxIntro";
import counterReducer from "../ReduxTookKit/ReduxIntro";
import { configureStore } from "@reduxjs/toolkit";

// const configureStore = (initialState = {}) => {
//   const reducer = combineReducers({
//     auth: () => ({ mock: true }),
//     form: persistReducer(
//       {
//         key: "form", // key for localStorage key, will be: "persist:form"
//         storage,
//         debug: true,
//         blacklist: ["foo"],
//       },
//       rootReducer
//     ),
//   });

//   const store = createStore(
//     persistReducer(
//       {
//         key: "root",
//         debug: true,
//         storage,
//         whitelist: ["auth"],
//       },
//       reducer
//     ),
//     initialState
//   );

//   console.log("initialState", store.getState());

//   const persistor = persistStore(store, null, () => {
//     // if you want to get restoredState
//     console.log("restoredState", store.getState());
//   });

//   return { store, persistor };
// };

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export { configureStore, store };
