import { configureStore } from "@reduxjs/toolkit";
import universitiesReducer from "../reducers/universities/universityReducer";


export const store = configureStore({
    reducer: {
      universities: universitiesReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
})
