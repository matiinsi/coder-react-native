import { object, string } from "yup"

export const addPetPhotoSchema = object().shape({
    profileImage: string()
        .required("Debes subir una imágen de tu Mascota"),
})