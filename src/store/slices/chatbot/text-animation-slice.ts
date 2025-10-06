import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AnimationState {
  cancelAnimation: boolean;
  isAnimating: boolean;
}

const initialState: AnimationState = {
  cancelAnimation: false,
  isAnimating: false,
};

const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setAnimating: (state, action: PayloadAction<boolean>) => {
      state.isAnimating = action.payload;
      if (!action.payload) state.cancelAnimation = false;
    },
    cancelAnimation: (state) => {
      state.cancelAnimation = true;
      state.isAnimating = false;
    },
    resetCancelAnimation: (state) => {
      state.cancelAnimation = false;
    },
  },
});

export const { setAnimating, cancelAnimation, resetCancelAnimation } =
  animationSlice.actions;
export default animationSlice.reducer;
