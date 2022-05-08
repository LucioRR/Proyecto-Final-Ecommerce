window.addEventListener('load', () => {
    let form = document.querySelector('#registerForm');
    let errors = {};
    let email = document.querySelector('#email');
    let emailConfirm = document.querySelector('#emailConfirm');
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let passRegex = /(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/;
    let password = document.querySelector('#contraseña');
    let confirmPassword = document.querySelector('#contraseñaConfirmar');
    let avatar = document.querySelector('#avatar');
    let errorEmail = document.querySelector('#errorEmail');
    let emailConfirmError = document.querySelector('#emailConfirmError');
    let passwordError = document.querySelector('#passwordError');
    let passwordConfirmError = document.querySelector('#passwordConfirmError');
    let avatarError = document.querySelector('#avatarError');


    // Validador del campo email
    email.addEventListener('blur', function(e){
        if (email.value.length == 0){
            errorEmail.innerHTML = 'Debe ingresar un email';
            errors.email = 'Error al ingresar el email';
        }
        else if(!emailRegex.test(e.target.value)){
            errorEmail.innerHTML = 'Email Inválido';
            errors.email = 'Error al ingresar el email';
        } else {errorEmail.innerHTML = ''}
    })

    // Validador del campo confirmacion email
    emailConfirm.addEventListener('blur', function(e){
        if (emailConfirm.value.length == 0){
            emailConfirmError.innerHTML = 'Debe ingresar un email';
            errors.emailConfirmError = 'Error al ingresar el email';
        }
        else if( !emailRegex.test(e.target.value)){
            emailConfirmError.innerHTML = 'Email Inválido';
            errors.emailConfirmError = 'Error al ingresar el email';
        }
        else if (emailConfirm.value != email.value){
            emailConfirmError.innerHTML = 'El email ingresado debe ser igual al anterior';
            errors.emailConfirmError = 'El email ingresado no coincide';
        } else {emailConfirmError.innerHTML = ''}
    })

    // Validador de campo de Password
    password.addEventListener('blur', function(e){
        if (password.value.length == 0){
            passwordError.innerHTML = 'Debe ingresar una contraseña';
            errors.password = 'Error al ingresar la contraseña';
        }
        else if(!passRegex.test(e.target.value)){
            passwordError.innerHTML = 'Contraseña Inválida';
            errors.password = 'Error al ingresar la contraseña';
        } else {passwordError.innerHTML = ''}
    })

    // Validador del campo confirmacion Password
    confirmPassword.addEventListener('blur', function(e){
        if (confirmPassword.value.length == 0){
            passwordConfirmError.innerHTML = 'Debe ingresar una contraseña';
            errors.passwordConfirmError = 'Error al ingresar la contraseña';
        }
        else if( !passRegex.test(e.target.value)){
            passwordConfirmError.innerHTML = 'Contraseña Inválida';
            errors.passwordConfirmError = 'Error al ingresar la contraseña';
        }
        else if (confirmPassword.value != password.value){
            passwordConfirmError.innerHTML = 'La contraseña ingresada debe ser igual a la anterior';
            errors.passwordConfirmError = 'La contraseña ingresada no coincide';
        } else {passwordConfirmError.innerHTML = ''}
    })
    

    //Inserción de errores en el DOM
    
    if (Object.keys(errors).length > 0) {
        e.preventDefault();
    }

});
;
