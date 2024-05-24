import dayjs from 'dayjs';

export const addPetValues = {
    id: '',
    petType: '',
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
    }
}