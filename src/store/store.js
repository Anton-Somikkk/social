import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import postReducer from "../Slices/postSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  post: postReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
