import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfo {
  email: string | null;
  username: string | null;
  address: string | null;
  name: string | null;
  avatar: string | null;
}

interface AuthState {
  user: UserInfo | null;
  isConnected: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  user: null,
  isConnected: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.user = action.payload;
      state.isConnected = true;
      state.isLoading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.isConnected = false;
      state.isLoading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export default authSlice.reducer;
