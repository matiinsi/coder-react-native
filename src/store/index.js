import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import petsReducer from "../features/pets/petsSlice";
import authReducer from "../features/auth/authSlice";
import { petsApi } from "../services/petsServices";
import { authApi } from "../services/authServices";

const store =  configureStore({
    reducer: {
        pets: petsReducer,
        auth: authReducer,
        [petsApi.reducerPath]: petsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(petsApi.middleware)
            .concat(authApi.middleware)
})

setupListeners(store.dispatch);

export default store;