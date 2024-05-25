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
        getLocationByCityStateAndCountry: builder.query({
            query: ({address, postalCode, city, state, country}) => `https://api.opencagedata.com/geocode/v1/json?q=${address},${postalCode},${city},${state},${country}&key=0d64373f106a4605ba62266e4bb04bd3`,
        }),
        
    }),
})

export const { useLoginMutation, useRegisterMutation, useGetLocationByCityStateAndCountryQuery } = authApi;