import { createSlice } from '@reduxjs/toolkit';
import {register, login,logOut} from '../auth/auth-operation';



const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
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
const authOperationLoginFulfielled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};
const authOperationLogOutFulfielled = (state, action) => {
    state.user = { name: null, email: null,};
    state.token = null;
    state.isLoggedIn = false;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
         builder
            .addCase(register.fulfilled, authOperationRegisterFulfielled)
            .addCase(login.fulfilled, authOperationLoginFulfielled)
            .addCase(logOut.fulfilled, authOperationLogOutFulfielled)
            
    },
});

export const authReducer = authSlice.reducer;