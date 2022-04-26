window.addEventListener('load', () => {
    let form = document.querySelector('#register-form');

    form.addEventListener("submit", (event) => {
        let errors = new Map();
        let email = document.querySelector('#email');
        let email_confirm = document.querySelector('#email-confirm');
        let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let passRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
        let password = document.querySelector('#contraseña');
        let confirmPassword = document.querySelector('#contraseña_confirmar');
        let emailError = document.querySelector('#email-error');
        let passwordError = document.querySelector('#password-error');
        //let avatar = document.querySelector('#avatar');

        // Validador de email
        if ( !emailRegex.test(email.value)) {
            errors.set('invalidEmail', 'Ingrese un email válido')
        } else if (email != email_confirm) {
            errors.set('differentEmail', 'El email no coincide')
        }

        // Validador de campo de Password
        if (password.value.length < 8) {
            errors.set('shortPassword', 'Contraseña muy corta');
        } else if (!emailRegex.test(password.value)) {
            errors.set('invalidPassword', 'La contraseña debe contener al menos un número, un símbolo, una mayúscula y una minuscula.');
        } else if (password != confirmPassword) {
            errors.set('diferrentPassword', 'Las contraseñas no coinciden')
        }

        // Inserción de errores en el DOM
        if (errors.size > 0){
            event.preventDefault();
            if (errors.has('invalidEmail')){
                userError.innerText = errors.get('invalidEmail');
                username.style.backgroundColor = 'camel';
            }
            if (errors.has('shortPassword')){
                passwordError.innerText = errors.get('shortPassword');
                password.style.backgroundColor = 'camel';
            }
            if (errors.has('invalidPassword')){
                passwordError.innerText = errors.get('invalidPassword');
                password.style.backgroundColor = 'camel';
            }
        }

    });    
});