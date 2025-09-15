import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // aqui se agregaran los reducers para manejar el estado global
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
