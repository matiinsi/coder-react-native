import { object, string } from "yup"

export const addPetInfoSchema = object().shape({
    petType: string()
        .required("Tipo de mascota requerido"),
    breed: string()
        .required("Raza requerida"),
    size: string()
        .required("Tamaño requerido"),
    necklace: string()
        .required("Identificación de collar requerido"),
    dateLost: string()
        .required("Fecha de extravío requerida")
})