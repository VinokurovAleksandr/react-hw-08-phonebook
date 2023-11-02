import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contactsSlise';
import { filterReducer } from '../redux/filterSlise';
import {authReducer} from '../redux/auth/auth-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

];

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

const persistReducerUser = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistReducerUser,
    },
    middleware,
});

export const persistor = persistStore(store);
