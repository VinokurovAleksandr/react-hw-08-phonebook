// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlise';
import { filterReducer } from '../redux/filterSlise';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

// export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
