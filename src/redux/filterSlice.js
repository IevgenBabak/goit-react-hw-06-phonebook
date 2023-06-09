import { createSlice } from '@reduxjs/toolkit';
const initialState = {
 contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.input = action.payload;
      },
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;


 