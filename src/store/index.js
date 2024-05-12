import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import petsReducer from "../features/pets/petsSlice";
import { petsApi } from "../services/petsServices";

const store =  configureStore({
    reducer: {
        pets: petsReducer,
        [petsApi.reducerPath]: petsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(petsApi.middleware)
})

setupListeners(store.dispatch);

export default store;