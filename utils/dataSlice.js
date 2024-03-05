import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        dataItems: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.dataItems = action.payload;
        }).addCase(fetchData.pending, () => {console.log('Pending')});
    } ,
});

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async() => {
        const data = await fetch('https://run.mocky.io/v3/713214c7-5dfa-406c-b2d7-425ef21be44c');
        const response = await data.json();
        console.log('response ', response);
        return response.data
    }
)

export default dataSlice.reducer;