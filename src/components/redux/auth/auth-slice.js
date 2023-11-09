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

// const isPendingAction = state => {
//     state.isLoading = true;
// };

// const isRejectedAction = (state, { payload }) => {
//     state.isLoading = false;
//     state.items = payload;
// };

const authOperationRegisterFulfielled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};
// const authOperationLoginFulfielled = (state, action) => {
//     state.user = action.payload.user;
//     state.token = action.payload.token;
//     state.isLoggedIn = true;
// };
// const authOperationLogOutFulfielled = (state, _) => {
//     state.user = { name: null, email: null,};
//     state.token = null;
//     state.isLoggedIn = false;
// };
// const authOperationRefreshUserFulfielled = (state, action) => {
//     state.user = action.payload;
//     state.isLoggedIn = true;
//     state.isRefreshing = false;
// };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
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
            .addCase(refreshCurrentUser.pending, (state, action) => {
                state.isRefreshing = true
            })
            .addCase(refreshCurrentUser.rejected, (state) => { 
                state.isRefreshing = false
            })
            
    },
});

export const authReducer = authSlice.reducer;