import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import {fetchContacts, addContact, deleteContact } from './operations';



// const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: contactsState,
//     reducers: {
//         addContacts(state, action) {
//             state.items.unshift(action.payload);
//         },
//          deleteContact(state, action) {
//         state.items = state.items.filter(
//             contact => contact.id !== action.payload
//         );
//     },
//     },
   
// });

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
    // filter: '',
};

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
    state.contacts.items.puch(payload)
};

const hendleDeleteContactsFulfilled = (state, { payload }) => {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(e => e.id !== payload.id);
};


const contactSlice = createSlice({
    name: 'contacts',
    initialState,

 
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


// const contactsPersistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['filter'],
// };

// export const persistedContactReducer = persistReducer(
//     contactsPersistConfig,
//     contactSlice.reducer
// );



// export const { addContacts, deleteContact } = contactSlice.actions;

// export const getContacts = state => state.contacts.contacts;
// export const setFilter = contactSlice.actions.setFilter;

export const contactsReducer = contactSlice.reducer;



/* */

