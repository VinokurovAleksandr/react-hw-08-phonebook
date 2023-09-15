import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import contactsReduser from './contacts-actions/contacts-reducer';


const rootReducer = combineReducers({
    contacts: contactsReduser,
})
// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
    reducer: rootReducer,
});

export default store;