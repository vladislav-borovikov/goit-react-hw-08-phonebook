import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogedIn: false,
  isFetchingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [authOperations.login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogedIn = true;
    },
    [authOperations.logout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogedIn = false;
    },
    [authOperations.refresh.pending](state) {
      state.isFetchingUser = true;
    },
    [authOperations.refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLogedIn = true;
      state.isFetchingUser = false;
    },
    [authOperations.refresh.rejected](state) {
      state.isFetchingUser = false;
    },
  },
});

export default authSlice.reducer;
