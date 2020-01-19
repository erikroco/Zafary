const inpUsername = document.querySelector('#email');
const inpPassword = document.querySelector('#contraseña');
const btnLogin = document.querySelector('#boton');
const msgError = document.querySelector('.msg-error');

btnLogin.addEventListener('click', login);
inpUsername.addEventListener('focus', focusInput);
inpPassword.addEventListener('focus', focusInput);

function login() {
    if (inpUsername.value !== 'ejemplo@gmail.com' || inpPassword.value !== '123456') { 
    msgError.classList.remove(['hide']);
    console.log('error!');
    } else {
    console.log('acceso correcto!');
    document.location.assign('../Layout/index.html');
    }
}

function focusInput(){
    msgError.classList.remove(['visible']);
    msgError.classList.add(['hide']);
    }
