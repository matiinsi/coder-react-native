import { object, string } from "yup"

export const addPetLocationSchema = object().shape({
    country: string()
        .required("País requerido"),
    state: string()
        .required("Provincia requerida"),
    city: string()
        .required("Localidad requerida"),
    address: string()
        .required("Dirección requerida"),
    postalCode: string()
        .required("Código Postal requerido")
})