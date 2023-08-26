import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    greetings: [],
    loading: false,
    error: '',
};

const url = 'http://localhost:3000/api/v1/greetings';


export const getgreetings = createAsyncThunk('greetings/fetchgreetings', async () => {
    const response = await fetch(`${url}`, {
        mode: 'no-cors'
    });
    const data = await response.json();
    return data.text
});

const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getgreetings.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getgreetings.fulfilled, (state, action) => {
            state.loading = false;
            state.greetings = action.payload;
            state.error = '';
        });
        builder.addCase(getgreetings.rejected, (state, action) => {
            state.loading = false;
            state.greetings = [];
            state.error = action.error.message;
        });
    },
});

export default greetingsSlice.reducer;