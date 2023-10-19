import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://651eea3a44a3a8aa4769320e.mockapi.io/api/v1/';


const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/contacts');
            return response.data
        } catch (e) {
            return rejectWithValue(e.response)
        }
    }
);