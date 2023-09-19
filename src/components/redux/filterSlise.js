import { createSlice } from '@reduxjs/toolkit';

const filterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    setFilter(state, {payload}) {
      return (state = payload);
    },
  },
});


export const { setFilter } = filterSlice.actions;

export const getFilter = state => state.filter;

export const filterReducer = filterSlice.reducer;