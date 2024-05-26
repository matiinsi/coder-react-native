import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realtimeDatabase";
import { apiKeyOpencage } from "../databases/opencageData";

export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['pets'],
    endpoints: (builder) => ({
        getPets: builder.query({
            query: (args) => {
                const { breedSelected, sizeSelected, petSelected, necklaceSelected, dateLostSelected, countrySelected, stateSelected } = args;
                let queryParams = [];
        
                if (breedSelected) {
                    queryParams.push(`orderBy="breed"&equalTo="${breedSelected}"`);
                }
                if (sizeSelected) {
                    queryParams.push(`orderBy="size"&equalTo="${sizeSelected}"`);
                }
                if (petSelected) {
                    queryParams.push(`orderBy="petType"&equalTo="${petSelected}"`);
                }
                if (necklaceSelected) {
                    queryParams.push(`orderBy="necklace"&equalTo=${necklaceSelected}`);
                }
                if (dateLostSelected) {
                    queryParams.push(`orderBy="dateLost"&equalTo="${dateLostSelected}"`);
                }
                if (countrySelected) {
                    queryParams.push(`orderBy="location/country"&equalTo="${countrySelected}"`);
                }
                if (stateSelected) {
                    queryParams.push(`orderBy="location/state"&equalTo="${stateSelected}"`);
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
        getLocationByCityStateAndCountry: builder.query({
            query: ({address, postalCode, city, state, country}) => `https://api.opencagedata.com/geocode/v1/json?q=${address},${postalCode},${city},${state},${country}&key=${apiKeyOpencage}`,
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
    usePostImageProfileAccountMutation,
    useGetLocationByCityStateAndCountryQuery
} = petsApi; // Exporto los hooks