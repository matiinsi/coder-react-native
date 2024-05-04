export const converSize = (size) => {
    switch(size) {
        case 'small':
            return 'Pequeño';
        case 'medium':
            return 'Mediano';
        case 'large':
            return 'Grande';
        default:
            return 'No especificado';
    }
}