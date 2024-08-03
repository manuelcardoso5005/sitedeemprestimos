document.addEventListener('DOMContentLoaded', () => {
    const formControls = document.querySelectorAll('.form-control');

    formControls.forEach(control => {
        const input = control.querySelector('input');
        const label = control.querySelector('label');

        input.addEventListener('focus', () => {
            label.classList.add('activeLabel');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                label.classList.remove('activeLabel');
            }
        });
    });
});