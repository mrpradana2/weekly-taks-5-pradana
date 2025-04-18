import dataUsers from "./auth.js";
import dataUserLogin from "./userAuth.js";
import dataOrderMovie from "./orderMovie.js";
import dataUserCinema from "./dataUserCinema.js";
import dataMovies from "./dataMovies.js";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "users",
  storage,
};

const persistConfigUserLogin = {
  key: "userLogin",
  storage,
};

const persistConfigOrderMovie = {
  key: "orderMovie",
  storage,
};

const persistConfigUserCinema = {
  key: "orderCinema",
  storage,
};

const persistConfigDataMovies = {
  key: "dataMovies",
  storage,
};

const persistedReducerDataUsers = persistReducer(persistConfig, dataUsers);
const persistedReducerUserLogin = persistReducer(
  persistConfigUserLogin,
  dataUserLogin
);
const persistedReducerOrderMovie = persistReducer(
  persistConfigOrderMovie,
  dataOrderMovie
);

const persistedReducerOrderCinema = persistReducer(
  persistConfigUserCinema,
  dataUserCinema
);

const persistedReducerDataMovies = persistReducer(
  persistConfigDataMovies,
  dataMovies
);

const reducer = combineReducers({
  dataUsers: persistedReducerDataUsers,
  dataUserLogin: persistedReducerUserLogin,
  dataOrderMovie: persistedReducerOrderMovie,
  dataUserCinema: persistedReducerOrderCinema,
  dataMovies: persistedReducerDataMovies,
});

export default reducer;
