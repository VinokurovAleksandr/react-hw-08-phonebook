import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651eea3a44a3a8aa4769320e.mockapi.io/api/v1/';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios.get('/contacts');
            return data
        } catch  {
            const message = 'Not fond contacts list'
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const {data} = await axios.post('/contacts', contact);
            return data
        } catch {
            const message = 'Add error'
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (id, thunkAPI) => {
        try {
            const {data} = await axios.delete(`/contacts/${id}`);
            return data
        } catch {
            const message = 'Delete error'
            return thunkAPI.rejectWithValue(message)
        }
    }
);
