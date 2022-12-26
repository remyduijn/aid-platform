import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchRequestedRequestsApi = createAsyncThunk('requestedRequests/FetchRequestedRequestsApi', async () => {
  return axios
  .get("http://localhost:3001/requests/requested" , {
  }).then(response => response.data)
})

export const FetchVolunteeredRequestsApi = createAsyncThunk('volunteeredRequests/FetchVolunteeredRequestsApi', async () => {
  return axios
  .get("http://localhost:3001/requests/volunteered" , {
  }).then(response => response.data)
})

const requestsApiSlice = createSlice({
  name: 'requestsData',
  initialState: {
    requestedRequests: [],
    volunteeredRequests: [],
    loading: false,
    error: '',
  },
  extraReducers: {
    [FetchRequestedRequestsApi.pending]: (state) => {
      return { ...state, loading: true }
    },
    [FetchRequestedRequestsApi.fulfilled]: (state, { payload }) => {
      return { ...state, requestedRequests: payload };
    },
    [FetchRequestedRequestsApi.rejected]: (state) => {
      console.log("rejected")
      return { ...state, error: "error" }
    },
    [FetchVolunteeredRequestsApi.fulfilled]: (state, { payload }) => {
      return { ...state, volunteeredRequests: payload };
    },
  }
})

export const allRequestedRequests = (state) => state.requestsData.requestedRequests
export const allVolunteeredRequests = (state) => state.requestsData.volunteeredRequests
export default requestsApiSlice.reducer
