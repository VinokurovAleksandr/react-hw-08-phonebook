import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlise';
import { filterReducer } from '../redux/filterSlise';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});
