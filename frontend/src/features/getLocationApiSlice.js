import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading : false,
    data : {},
    error : ''
}

export const Fetchdata = createAsyncThunk('api/Fetchdata' , async () => {
    return axios
    .get(`https://geolocation-db.com/json/`)
    .then(response => response.data)
})

const getLocationApiSlice = createSlice({
    name: 'api',
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(Fetchdata.pending , state => {
            state.loading = true
        })
        builder.addCase(Fetchdata.fulfilled , (state , action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(Fetchdata.rejected , (state , action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})
export default getLocationApiSlice.reducer
