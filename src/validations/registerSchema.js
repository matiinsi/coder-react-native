import { object, string, ref } from "yup"

export const registerSchema = object().shape({
    email: string().required("Email es requerido").email("Email inválido"),
    password: string()
        .required("La contraseña es requerido")
        .min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: string()
        .oneOf([ref("password"), null], "No coincide el password")
        .required("Confirmar Password es requerido"),
})