import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Fetchdata = createAsyncThunk('api/Fetchdata', async () => {
  return axios
    .get(`https://geolocation-db.com/json/`)
    .then(response => response.data)
})

const getLocationApiSlice = createSlice({
  name: 'getlocation',
  initialState: {
    loading: false,
    data: {},
    error: ''
  },
  extraReducers: {
    [Fetchdata.pending]: (state) => {
        console.log("pending")
        return {...state , loading : true}
    },
    [Fetchdata.fulfilled]: (state, { payload }) => {
        console.log('successfull')
        return { ...state, movies: payload };
    },
    [Fetchdata.rejected]: (state) => {
        console.log("rejected")
        return { ...state , error : "error"}
    }}
})

export const alldata = (state) => state.getlocation.data;
export default getLocationApiSlice.reducer
