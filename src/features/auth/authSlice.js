import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            email: null,
            idToken: null,
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value.email = action.payload.email;
            state.value.idToken = action.payload.idToken;
        },
        cleanUser: (state) => {
            state.value.email = null;
            state.value.idToken = null;
        }
    }
});

export const { setUser, cleanUser } = authSlice.actions;

export default authSlice.reducer;