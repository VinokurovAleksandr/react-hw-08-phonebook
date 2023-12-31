import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast  from 'react-hot-toast';
;
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


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
            const { data } = await axios.post('/contacts', contact);
            toast.success('Added')
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
            const { data } = await axios.delete(`/contacts/${id}`);
            toast.success('Deleted')
            return data
        } catch {
            const message = 'Delete error'
            return thunkAPI.rejectWithValue(message)
        }
    }
);
