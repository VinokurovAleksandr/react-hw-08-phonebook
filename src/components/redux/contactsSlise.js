import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact } from './operations';


const isPendingAction = state => {
    state.isLoading = true;
};

const isRejectedAction = (state, { payload }) => {
    state.isLoading = false;
    state.items = payload;
};

const handleFetchContactsFulFilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items = payload;
};

const hendleAddContactsFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    // state.items = [payload, ...state.items];
    state.items.push(payload)
};

const hendleDeleteContactsFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(e => e.id !== payload.id);
};


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },

 
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, isPendingAction)
            .addCase(fetchContacts.fulfilled, handleFetchContactsFulFilled)
            .addCase(fetchContacts.rejected, isRejectedAction)
            .addCase(addContact.pending, isPendingAction)
            .addCase(addContact.fulfilled, hendleAddContactsFulfilled)
            .addCase(addContact.rejected, isRejectedAction)
            .addCase(deleteContact.pending, isPendingAction)
            .addCase(deleteContact.fulfilled, hendleDeleteContactsFulfilled)
            .addCase(deleteContact.rejected, isRejectedAction)
    }
});

export const contactsReducer = contactSlice.reducer;




