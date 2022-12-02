import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'
const user=Cookies.get('user')

export const createCurrentChatMessagesApi = createAsyncThunk('currentChatMessages/createCurrentChatMessagesApi',
  async (message) => {
    return axios
      .post(`http://localhost:3001/chat_rooms/${message.chat_room_id}/messages`, {
        message: message,
        id: message.chat_room_id,
        session: {user_id: user} // not needed
      },
        { withCredentials: true })
      .then(response => response.data)
  })


const currentChatMessagesApiSlice = createSlice({
  name: 'currentChatMessagesApiData',
  initialState: {
    loading: false,
    currentChatMessages: [],
    error: '',
  },
  reducers: {
    setCurrentChatMessages: (state, action) => {
      state.currentConversation = action.payload
    }
  },
  extraReducers: {
    [createCurrentChatMessagesApi.pending]: (state) => {
      // console.log("pending")
      return { ...state, loading: true }
    },
    [createCurrentChatMessagesApi.fulfilled]: (state, { payload }) => {
      // console.log('successfull')
      return { ...state, currentChatMessages: payload };
    },
    [createCurrentChatMessagesApi.rejected]: (state) => {
      console.log("rejected", state)
      return { ...state, error: "error" }
    }
  }
})

export const currentChatMessagesData = (state) => state.currentChatMessagesApiData.currentChatMessages;
export const { setCurrentChatMessages } = currentChatMessagesApiSlice.actions
// const currentChatMessagesReducer = currentChatMessagesApiSlice.reducer;
export default currentChatMessagesApiSlice.reducer
