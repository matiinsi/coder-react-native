import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        value: {
            email: null,
            idToken: null,
            localId: null,
            imageCamera: null,
            location: {
                lat: -34.603722,
                lng: -58.381592,
                state: "Buenos Aires",
                country: "Argentina"
            }
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
        },
        setLocationUser : (state, action) => {
            state.value.location = action.payload;
        }
    }
});

export const { setUser, cleanUser, setImageCamera, setLocationUser } = authSlice.actions;

export default authSlice.reducer;