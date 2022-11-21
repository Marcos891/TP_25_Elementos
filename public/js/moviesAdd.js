const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element);

let h1 = qs('h1');
let article = qs('article');
let section = $('formulario');

h1.innerText = 'AGREGAR PELÍCULAS';
h1.classList.add('titulo');

article.classList.add('fondoTransparente');
section.classList.add('fondoCRUD');