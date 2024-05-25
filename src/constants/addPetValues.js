import dayjs from 'dayjs';

export const addPetValues = {
    id: '',
    petType: '',
    color: '',
    breed: '',
    size: '',
    necklace: '',
    dateLost: dayjs().format('YYYY-MM-DD'),
    profileImage: '',
    userId: '',
    location: {
        country: '',
        state: '',
        city: '',
        address: '',
        postalCode: '',
        lat: '',
        lng: ''
    }
}