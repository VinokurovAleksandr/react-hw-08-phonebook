// import { combineReducers } from 'redux';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import contactsReduser from './contacts-actions/contacts-reducer';
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
];

const rootReducer = combineReducers({
    contacts: contactsReduser,
});
// const store = createStore(rootReducer, composeWithDevTools());

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware, 
    
//   middleware: getDefaultMiddleware => getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};