import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";

export const petsApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getPetsByBreed: builder.query({
            query: (breed) => `breeds.json?orderBy="breed"&equalTo="${breed}"`
        }),
        getPetsBySize: builder.query({
            query: (size) => `size.json?orderBy="size"&equalTo="${size}"`
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
        getSizes: builder.query({
            query: () => `sizes.json`
        }),
        getPetsTypes: builder.query({
            query: () => `pet_types.json`,
        })
    })
}); // Creo la API

export const { useGetPetsByBreedQuery, useGetPetsBySizeQuery, useGetBreedsByPetTypeQuery, useGetSizesQuery, useGetPetsTypesQuery } = petsApi; // Exporto los hooks