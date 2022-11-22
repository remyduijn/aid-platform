import { configureStore } from "@reduxjs/toolkit";
import getLocationApiSlice from "./features/getLocationApiSlice";
import communityFormApiSlice from "./features/communityFormApiSlice"

const store = configureStore({
    reducer:{
        getLocation : getLocationApiSlice,
        communityFormApiData : communityFormApiSlice
    }
})

export default store;