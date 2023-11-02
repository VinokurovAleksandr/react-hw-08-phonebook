import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';     


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/user/singup', credentials);
        return data;
    } catch {
        const message = 'Error';
        return message;
    }
});

export const login = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/user/login', credentials);
        return data;
    } catch {
        const message = ' LogIn Error';
        return message;
    }
});