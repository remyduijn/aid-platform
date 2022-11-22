import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CommunityFormApiData = createAsyncThunk('api/communityFormApiData', async (communityRequest) => {
  debugger
  
  return axios
    .post(`http://localhost:3001/requests`, {
      community_request: communityRequest
    }).then(response => response.data)
})

const communityFormApiSlice = createSlice({
  name: 'communityFormApiData',
  initialState: {
    loading: false,
    data: {},
    error: ''
  },
  extraReducers: {
    [CommunityFormApiData.pending]: (state) => {
      console.log("pending")
      return { ...state, loading: true }
    },
    [CommunityFormApiData.fulfilled]: (state, { payload }) => {
      console.log('successfull')
      return { ...state, movies: payload };
    },
    [CommunityFormApiData.rejected]: (state) => {
      console.log("rejected")
      return { ...state, error: "error" }
    }
  }
})

export const alldata = (state) => state.communityFormApiData.data;
export default communityFormApiSlice.reducer
