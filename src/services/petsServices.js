import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";

export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['pets'],
    endpoints: (builder) => ({
        getPets: builder.query({
            query: (args) => {
                const { breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected } = args;
                let queryParams = [];
        
                if (breedSelected) {
                    queryParams.push(`orderBy="breed"&equalTo="${breedSelected}"`);
                }
                if (sizeSelected) {
                    queryParams.push(`orderBy="size"&equalTo="${sizeSelected}"`);
                }
                if (petSelected) {
                    queryParams.push(`orderBy="pet_type"&equalTo="${petSelected}"`);
                }
                if (necklaceSelected) {
                    queryParams.push(`orderBy="necklace"&equalTo=${necklaceSelected}`);
                }
                if (dateLostSelected) {
                    queryParams.push(`orderBy="date_lost"&equalTo="${dateLostSelected}"`);
                }
        
                const queryString = queryParams.join('&');
                return `pets.json?${queryString}`;
            },
            providesTags: ['pets'],
            transformResponse: (response) => {
                const responseTransformed = Object.values(response);
                return responseTransformed;
            }
        }),
        getBreedsByPetType: builder.query({
            query: (type) => `breeds.json?orderBy="tipo"&equalTo="${type}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response);
                return responseTransformed.map((item) => {
                    return {
                        label: item.label,
                        value: item.value
                    }
                });
            }
        }),
        getPetById: builder.query({
            query: (id) => `pets/${id}.json`,
            transformResponse: (response) => {
                return response;
            }
        }),
        getSizes: builder.query({
            query: () => `sizes.json`
        }),
        getPetsTypes: builder.query({
            query: () => `pet_types.json`,
        }),
        getImageProfileAccount: builder.query({
            query: (localId) => `imageProfileAccount/${localId}.json`
        }),
        postPet: builder.mutation({
            query: (pet) => ({
                url: `pets/${pet.id}.json`,
                method: 'PUT',
                body: pet
            }),
            invalidatesTags: ['pets'],
        }),
        postImageProfileAccount: builder.mutation({
            query: ({image, localId}) => ({
                url: `image_profile_account/${localId}.json`,
                method: 'PUT',
                body: image
            }),
        }),
    })
}); // Creo la API

export const { 
    useGetPetsQuery, 
    useGetBreedsByPetTypeQuery, 
    useGetSizesQuery, 
    useGetPetsTypesQuery, 
    useGetPetByIdQuery, 
    usePostPetMutation,
    usePostImageProfileAccountMutation
} = petsApi; // Exporto los hooks