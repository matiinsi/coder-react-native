export const convertDate = (date) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(date).toLocaleDateString('es-ES', options)
}