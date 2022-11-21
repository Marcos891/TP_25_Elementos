/* const main = document.querySelector('#mainContainer');
*/
const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

const main = $('mainContainer');
const parrafos = qsa('p');
const subtitulo = qs('.subtitulo');
const listado = qs('h2 a');

/* const cambiarFondo = () => {
    qs('body').classList.toggle('fondo')}; */ // con toggle podemos agregar y sacar el fondo agregando el onclick en el html


let nombre = prompt('¿cual es tu nombre?');
let respuesta = confirm('¿Queres cambiar el fondo?')
if (respuesta) {
    qs('body').classList.add('fondo')
};

subtitulo.textContent += nombre ? nombre : 'invitado' ;
subtitulo.style.textTransform = 'uppercase';

listado.style.color = '#E51B3E';

parrafos.forEach((parrafo, index) => {
    if (index % 2 === 0) { 
       parrafo.classList.add('destacadoImpar')
    }else{
       parrafo.classList.add('destacadoPar')
    }
});

main.style.display = 'block';

