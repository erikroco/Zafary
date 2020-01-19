const irHome = document.querySelector('#ir-home');
const irWhatzapp = document.querySelector('#ir-whatzapp');
const irZpotify = document.querySelector('#ir-zpotify');
const nomPagina = document.querySelector('#nombre-pagina');

irHome.addEventListener('click', navegarHome);
irWhatzapp.addEventListener('click', navegarWhatzapp);
irZpotify.addEventListener('click', navegarZpotify);


function navegarHome(){
    const contDinamico = document.querySelector('#contenido-dinamico');
    console.log(contenidoDinamico);
    contDinamico.setAttribute('src', './index.hmtl')
    nomPagina.innerHTML = 'Zafary';
}

function navegarWhatzapp(){
    const contDinamico = document.querySelector('#contenido-dinamico');
    console.log(contenidoDinamico);
    contDinamico.setAttribute('src', '../whatzApp/index.hmtl')
    nomPagina.innerHTML = 'WhatzApp';
}

function navegarZpotify(){
    const contDinamico = document.querySelector('#contenido-dinamico');
    console.log(contenidoDinamico);
    contDinamico.setAttribute('src', '../zpotify/index.hmtl')
    nomPagina.innerHTML = 'Zpotify';
}