import { configureStore } from "@reduxjs/toolkit";
import communityFormApiSlice from "./features/communityFormApiSlice"
import { currentLocationCooardinatesReducer } from "./features/getCurrentLocationSlice";

const store = configureStore({
    reducer:{
        communityFormApiData : communityFormApiSlice,
        currentLocationCooardinates : currentLocationCooardinatesReducer
    }
})

export default store;