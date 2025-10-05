import { createSlice } from "@reduxjs/toolkit";
import type { User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  logout?: () => void;
  avatarUrl?: string | null;
}

const user: User = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user") as string)
  : null;

const initialState: AuthState = {
  user: user,
  avatarUrl: null,
  logout: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      state.logout = action.payload;
    },
    setAvatarUrl: (state, action) => {
      state.avatarUrl = action.payload;
    },
  },
});

export const { setUser, setLogout, setAvatarUrl } = authSlice.actions;
