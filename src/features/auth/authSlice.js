import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            email: null,
            idToken: null,
            localId: null,
            imageCamera: null
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value.email = action.payload.email;
            state.value.idToken = action.payload.idToken;
            state.value.localId = action.payload.localId;
        },
        cleanUser: (state) => {
            state.value.email = null;
            state.value.idToken = null;
        },
        setImageCamera: (state, action) => {
            state.value.imageCamera = action.payload;
        }
    }
});

export const { setUser, cleanUser, setImageCamera } = authSlice.actions;

export default authSlice.reducer;