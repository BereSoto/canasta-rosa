import React from 'react';
import '../assets/styles/components/ProductList.scss';
// definimos variables

const $observe = document.getElementById('observe');
//const API = 'https://canastarosa.com/services/api/v1/market/products/?category__slug=san-valentin-pasteles-3';
const API = 'https://canastarosa.com/services/api/v1/market/products/';
window.onload = localStorage.clear(); //limpiar cache

// creamos el listado de productos
const ProductList = () => (
  <div id='observe' />
);
// se consume la api se llamal afuncion get data y se pasa de
// parametro la url de la api
const getData = (api) => {
  fetch(api) //se hace un fetch y se obtiene el json en un objeto llamado response
    .then((response) => response.json())
    .then((response) => {
      const products = response.results; //se declara la variable productos que tiene los resultados
      const newPage = response.next; //Nos da la siguiente pagina segun la respuesta
      localStorage.setItem('next_fetch', newPage); // guardar el cache
      const output = products
        .map((product) => { //recorre el listado de productos
          return `
        
        <article class="item"> 
          <img src="${product.photo.small}" /> 
          <h2>${product.id}<span>${product.name}</span></h2>
        </article>
        
      `;
          // regresa un articulo con foto, nombre y id
        })
        .join('');
      const newItem = document.createElement('section');
      newItem.classList.add('Items');
      newItem.innerHTML = output;
      $observe.appendChild(newItem); //se renderiza el articulo dentro del observador
    })
    .catch((error) => console.log(error)); //cachar el error en consola
};
//busca la nueva url de manera asincrona para obtener las siguientes paginas
const loadData = async () => {
  const nextUrl = localStorage.getItem('next_fetch');
  if (nextUrl) {
    await getData(nextUrl);
  }
  if (nextUrl === null) {
    await getData(API);
  }
  if (nextUrl === '') {
    creatingEndMessage();
    intersectionObserver.unobserve($observe);
  }
};
//se crea el objeto observador donde se cargan los datos
const intersectionObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadData();
    }
  },
  {
    rootMargin: '0px 0px 100% 0px',
  },
);

intersectionObserver.observe($observe);

export default ProductList;
