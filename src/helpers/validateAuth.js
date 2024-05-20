const validatePassword = (password) => {
    if (password.length < 6) {
        return false;
    }

    return true;
};

const validateRepeatPassword = (password, repeatPassword) => {
    if (password !== repeatPassword) {
        return false;
    }

    return true;
}

const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const validateName = (name) => {
    if (name.length < 3) {
        return false;
    }

    return true;
}

export { validatePassword, validateRepeatPassword, validateEmail, validateName };