const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let body = qs('body');
let h1 = qs('h1');

let oscuro = confirm('¿Desea modo oscuro?');
if (oscuro) {
    body.style.backgroundColor ='#7f7f7f'
    body.classList.add('fondoMoviesList')
}

h1.innerText = 'LISTADO DE PELÍCULAS';
h1.style.backgroundColor = 'teal'
h1.style.color = 'white'
h1.style.padding = '20px'