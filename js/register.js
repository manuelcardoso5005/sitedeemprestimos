function validateName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name.trim()) && name.trim() !== '';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length > 6;
}

document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.querySelector('.btn-entrar');
    const errorName = document.querySelector('.error-name');
    const errorEmail = document.querySelector('.error-email');
    const errorPass = document.querySelector('.error-pass');
    const form = document.querySelector('.login-form');
    const sucessMessage = document.querySelector('.sucess-message');

    if (btnEntrar && errorName && errorEmail && errorPass) {
        btnEntrar.addEventListener('click', (event) => {
            const nome = document.querySelector('#nome').value;
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            let isValidName = validateName(nome);
            let isValidEmail = validateEmail(email);
            let isValidPass = validatePassword(password);

            let formIsValid = true;

            if (!isValidName) {
                errorName.style.opacity = 1;
                formIsValid = false;
            } else {
                errorName.style.opacity = 0;
            }

            if (!isValidEmail) {
                errorEmail.style.opacity = 1;
                formIsValid = false;
            } else {
                errorEmail.style.opacity = 0;
            }

            if (!isValidPass) {
                errorPass.style.opacity = 1;
                formIsValid = false;
            } else {
                errorPass.style.opacity = 0;
            }

            if (!formIsValid) {
                event.preventDefault();
            } else {
                form.style.display = 'none';
                sucessMessage.style.display = 'block';
            }
        });
    }
});