import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseAuthUrl, apiKey } from "../databases/user";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseAuthUrl }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (auth) => ({
                url: `accounts:signInWithPassword?key=${apiKey}`,
                method: "POST",
                body: auth
            }),
        }),
        register: builder.mutation({
            query: (auth) => ({
                url: `accounts:signUp?key=${apiKey}`,
                method: "POST",
                body: auth
            }),
        }),

        
    }),
})

export const { useLoginMutation, useRegisterMutation } = authApi;