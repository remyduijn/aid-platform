import { configureStore } from "@reduxjs/toolkit";
import communityFormApiSlice from "./features/communityFormApiSlice"
import { currentLocationCooardinatesReducer } from "./features/getCurrentLocationSlice";
import chatsApiSlice from "./features/chatsApiSlice";

const store = configureStore({
    reducer:{
        communityFormApiData : communityFormApiSlice,
        currentLocationCooardinates : currentLocationCooardinatesReducer,
        chatsApiData : chatsApiSlice
    }
})

export default store;