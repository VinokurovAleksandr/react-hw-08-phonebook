import { createSlice } from '@reduxjs/toolkit';
import {register, login} from '../auth/auth-operation';
// import moduleName from 'module'



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

const authOperationRegisterFulfielled = (state, action) => {};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
         builder
            // .addCase(fetchContacts.pending, isPendingAction)
            .addCase(register.fulfilled, authOperationRegisterFulfielled)
            // .addCase(fetchContacts.rejected, isRejectedAction)
    },
});

export const authReducer = authSlice.reducer;