import { createSlice } from '@reduxjs/toolkit';
import {
    register,
    login,
    logOut,
    refreshCurrentUser,
} from '../auth/auth-operation';



const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const handleIfPending = state => {
  state.isLoading = true;
};

const handleIfReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.pending,handleIfPending)
            .addCase(register.rejected,handleIfReject)
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.pending,handleIfPending)
            .addCase(login.rejected,handleIfReject)
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.pending,handleIfPending)
            .addCase(logOut.rejected,handleIfReject)
            .addCase(logOut.fulfilled, (state, _) => {
                state.user = { name: null, email: null,};
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshCurrentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshCurrentUser.pending, handleIfPending)
            .addCase(refreshCurrentUser.rejected, handleIfReject)    
    },
});

export const authReducer = authSlice.reducer;