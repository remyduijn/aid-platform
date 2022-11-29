import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChatsApiData = createAsyncThunk('chats/fetchChatsApiData', async () => {
  return axios
    .get(`http://localhost:3001/chat_rooms`)
    .then(response => response.data)
})

export const fetchCurrentVolunteerData = createAsyncThunk('chats/fetchCurrentVolunteerData', async ({requesterId , communityRequestId}) => {
  return axios
    .post(`http://localhost:3001/chat_rooms` , {
      chat_room : {
        requester_id : requesterId,
        community_request_id : communityRequestId
      },
      session: {user_id: 1}
    },
    { withCredentials: true })
    .then(response => response.data)
})


const chatsApiSlice = createSlice({
  name: 'chatsApiData',
  initialState: {
    loading: false,
    chats: [],
    error: '',
    currentConversation: {},
    currentVolunteer: []
  },
  reducers: {
    setCurrentConversation: (state, action) => {
      state.currentConversation = action.payload
    }
  },
  extraReducers: {
    [fetchChatsApiData.pending]: (state) => {
      console.log("pending")
      return { ...state, loading: true }
    },
    [fetchChatsApiData.fulfilled]: (state, { payload }) => {
      console.log('successfull')
      return { ...state, chats: payload };
    },
    [fetchChatsApiData.rejected]: (state) => {
      console.log("rejected")
      return { ...state, error: "error" }
    },
    [fetchCurrentVolunteerData.fulfilled]: (state, { payload }) => {
      console.log('successfull')
      return {...state, chats: payload };
    },
  }
})

export const allChats = (state) => state.chatsApiData.chats;
export const currentVolunteerData = (state) => state.chatsApiData.currentVolunteer
export const currentConversation = (state) => state.chatsApiData.currentConversation;
export const { setCurrentConversation } = chatsApiSlice.actions
export default chatsApiSlice.reducer
