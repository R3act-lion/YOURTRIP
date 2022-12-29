import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const placeSlice = createSlice({
    name: "placeData",
    initialState: {
        placeData: {}
    },
    extraReducers:(builder) => {
        builder.addCase(asyncGetPlaceData.fulfilled, (state, action) => {
            state.placeData = action.payload
        })
    }
});

export const asyncGetPlaceData = createAsyncThunk('placeData', async () => {
    const response = await fetch('https://sdh20282.github.io/YOURTRIP_data/data.json');
    const result = await response.json();

    return result
})

export default placeSlice.reducer;