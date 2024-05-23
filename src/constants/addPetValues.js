import dayjs from 'dayjs';

export const addPetValues = {
    petType: '',
    breed: '',
    size: '',
    necklace: '',
    dateLost: dayjs().format('YYYY-MM-DD'),
    location: {
        country: '',
        state: '',
        city: '',
        address: '',
        postalCode: '',
    }
}