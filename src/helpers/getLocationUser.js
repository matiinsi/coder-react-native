import { apiKeyMap } from "../databases/googleMaps";

export const getLocationUser = async ({lat, lng}) => {

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKeyMap}`);
        const data = await response.json();
        if (data.results.length > 0) {

            const state = data.results[0].address_components.find(component =>
                component.types.includes('administrative_area_level_1')
            );

            const country = data.results[0].address_components.find(component =>
                component.types.includes('country')
            );

            return {
                lat: lat,
                lng: lng,
                state: state ? state.long_name : 'Unknown',
                country: country ? country.long_name : 'Unknown'
            };
        } else {
            return {
                lat: lat,
                lng: lng,
                city: 'Unknown',
                state: 'Unknown',
                country: 'Unknown'
            };
        }
    } catch (error) {
        console.log(error);
    }
};