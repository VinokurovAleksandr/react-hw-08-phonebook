import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';     


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
 
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
};
 
/*  *Post @ /user/singup
    *body: {name,email, password}
    *після успішної рег. добавляємо токен в HTTP -заголовок
*/

export const register = createAsyncThunk('auth/register',
    async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch {
        const message = 'Error';
        return message;
    }
    });

    /*  *Post @ 'users/login'
    *body: {mail, password}
    *після успішної рег. добавляємо токен в HTTP -заголовок
*/

export const login = createAsyncThunk('auth/login',
    async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch {
        const message = 'LogIn Error';
        return message;
    }
    });

    /*  *Post @ 'user/logout'
    *headers : Authorization: Bearer token
    * після успишноо логаута  бвидаляємо токан із HTTP-Заголовка
*/

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch {
        const message = 'LogOut failed';
        return message;
    }
});


export const refreshCurrentUser = createAsyncThunk('auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState()
        const persistedToken = state.auth.token;

        if (persistedToken === null) { 
            // return state;
            return thunkAPI.rejectWithValue();
        }
        
        token.set(persistedToken);
       try {
           const {data} = await axios.get('/users/current');
           return data
       } catch {
           const message = 'Error in fetchCurrentUser'
           return message;
       }
});