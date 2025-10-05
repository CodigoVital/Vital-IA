import { createSlice } from "@reduxjs/toolkit";
import type { User } from "@supabase/supabase-js";

interface AuthState {
  user: User | null;
  logout?: () => void;
  avatarUrl?: string | null;
}

const initialState = (): AuthState => {
  try {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user: User = JSON.parse(userStr);
      return {
        user: user,
        avatarUrl: user?.user_metadata?.avatar_url || null,
        logout: undefined,
      };
    }
  } catch (e) {
    console.error("Failed to parse user from localStorage", e);
  }

  return {
    user: null,
    avatarUrl: null,
    logout: undefined,
  };
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
