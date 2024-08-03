function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    return password.length > 6;
}

document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.querySelector('.btn-entrar');
    const errorEmail = document.querySelector('.error-email');
    const errorPass = document.querySelector('.error-pass');

    if (btnEntrar && errorEmail && errorPass) {
        btnEntrar.addEventListener('click', (event) => {
            const email = document.querySelector('#email').value;
            const password = document.querySelector('#password').value;

            let isValidEmail = validateEmail(email);
            let isValidPass = validatePassword(password);

            let formIsValid = true;

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
            }
        });
    }
});
