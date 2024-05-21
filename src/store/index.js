import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import petsReducer from "../features/pets/petsSlice";
import authReducer from "../features/auth/authSlice";
import { petsApi } from "../services/petsServices";
import { authApi } from "../services/authServices";
import { userApi } from "../services/userServices";

const store =  configureStore({
    reducer: {
        pets: petsReducer,
        auth: authReducer,
        [petsApi.reducerPath]: petsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(petsApi.middleware)
            .concat(authApi.middleware)
            .concat(userApi.middleware)
})

setupListeners(store.dispatch);

export default store;