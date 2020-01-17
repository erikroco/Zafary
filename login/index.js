var inpUsername = window.document.querySelector('#email');
var inpPassword = window.document.querySelector('#contraseña');
var btnLogin = window.document.querySelector('#boton');
var msgError = window.document.querySelector('#msg-error');

btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener('click', btnLogin);
function login() {
    if (inpUsername.value !== 'ejemplo@gmail.com' || inpPassword.value !== '123456') 
    { msgError.classList.remove(['hide']);
    console.log("error!");
    } else {
    console.log("acceso correcto!");
    document.location.assign("../ejercicios-taller-apps/Layout/index.html");
    }   
}

