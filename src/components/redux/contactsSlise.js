import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import {fetchContacts, addContact, deleteContact } from './operations';






// const contactsState = {
//    items:  [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

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



const contactSlice = createSlice({
    name: 'contacts',
    initialState,

    reducers: {
        setFilter(state, action) {
            state.filter = action.payload
            }
    },
  
    extraReducers: {
        [fetchContacts.pending](state) {
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },
        [fetchContacts.rejected](state, { payload }) {
            state.isLoading = false;
            state.contacts.items = [];
            state.items = payload;
        },
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
                state.error = null;
                // state.items = [payload, ...state.items];
                state.contacts.items.puch(payload)
        },
        [addContact.rejected](state, { payload }) {
            state.isLoading = false;
                state.items = payload;
        },
        [deleteContact.pending](state) {
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(e => e.id !== payload.id);
        },
        [deleteContact.rejected](state, { payload }) {
            state.isLoading = false;
            state.items = payload;
        },
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

export const getContacts = state => state.contacts.contacts;
// export const setFilter = contactSlice.actions.setFilter;

export const contactsReducer = contactSlice.reducer;



/* */

