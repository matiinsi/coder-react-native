import { object, string } from "yup"

export const loginSchema = object().shape({
    email: string().required("El Email es requerido").email("Email inválido"),
    password: string()
        .required("La contraseña es requerido")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
})