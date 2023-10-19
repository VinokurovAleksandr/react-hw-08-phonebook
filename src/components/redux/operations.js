import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://651eea3a44a3a8aa4769320e.mockapi.io/api/v1/';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const contacts = await axios.get('/contacts');
            return contacts.data
        } catch  {
            const message = 'Not fond contacts list'
            return thunkAPI.rejectWithValue(message)
        }
    }
);

export const addContact = createAsyncThunk(
    'contact/addContact',
    async (contact, thunkAPI) => {
        try {
            const contacts = await axios.post('/contacts', contact);
            return contacts.data
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
            const contacts = await axios.delete(`/contacts/${id}`);
            return contacts.data
        } catch {
            const message = 'Delete error'
            return thunkAPI.rejectWithValue(message)
        }
    }
);