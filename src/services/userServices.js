import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        getImageProfileAccount: builder.query({
            query: (localId) => `image_profile_account/${localId}.json`,
            providesTags: ['user'],
        }),
        postImageProfileAccount: builder.mutation({
            query: ({image, localId}) => ({
                url: `image_profile_account/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image
                }
            }),
            invalidatesTags: ['user'],
        }),
    })
}); // Creo la API

export const { 
    useGetImageProfileAccountQuery,
    usePostImageProfileAccountMutation
} = userApi; // Exporto los hooks