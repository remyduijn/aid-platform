import { configureStore } from "@reduxjs/toolkit";
import communityFormApiSlice from "./features/communityFormApiSlice"
import { currentLocationCooardinatesReducer } from "./features/getCurrentLocationSlice";
import chatsApiSlice from "./features/chatsApiSlice";
import {loggedInUserReducer} from "./features/userSlice";
import currentChatMessageApiSlice  from "./features/chatRoomMessagesSlice";

const store = configureStore({
    reducer:{
        communityFormApiData : communityFormApiSlice,
        currentLocationCooardinates : currentLocationCooardinatesReducer,
        chatsApiData : chatsApiSlice,
        loggedInUser : loggedInUserReducer,
        currentChatMessageApiData : currentChatMessageApiSlice
    }
})

export default store;