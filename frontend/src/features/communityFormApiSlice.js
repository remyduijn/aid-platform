import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CommunityFormApiData = createAsyncThunk('communityFormApiData/CommunityFormApiData', async (communityRequest) => {
  return axios
    .post(`http://localhost:3001/requests`, {
      community_request: communityRequest
    }).then(response => response.data)
})

export const getCommunityFormApiData = createAsyncThunk('communityFormApiData', async () => {
  return axios
    .get(`http://localhost:3001/requests`)
    .then(response => response.data)
})


const communityFormApiSlice = createSlice({
  name: 'communityFormApiData',
  initialState: {
    loading: false,
    data: [],
    error: '',
    volunteerData:[]
  },
  extraReducers: {
    [CommunityFormApiData.pending]: (state) => {
      console.log("pending")
      return { ...state, loading: true }
    },
    [CommunityFormApiData.fulfilled]: (state, { payload }) => {
      console.log('successfull')
      return { ...state, data: payload };
    },
    [CommunityFormApiData.rejected]: (state) => {
      console.log("rejected")
      return { ...state, error: "error" }
    },
    [getCommunityFormApiData.fulfilled]: (state, { payload }) => {
      return { ...state, volunteerData: payload };
    },
  }
})

export const alldata = (state) => state.communityFormApiData.data;
export const allVolunteerData = (state) => state.communityFormApiData.volunteerData
export default communityFormApiSlice.reducer
