import React from 'react';
import '../assets/styles/components/Card.scss';

const $card = document.getElementById('lista');
const API = 'https://canastarosa.com/services/api/v1/market/categories/';
window.onload = localStorage.clear();

const Card = () => (

  <div className='Card__content'>
    <div className='Card__title'>
      <h3>Categorias</h3>
    </div>
    <form id='lista'>
      <div className='Radio'>
        <label>
          <input type='radio' value='invitaciones' checked={true} />
           Invitaciones
        </label>
      </div>
      <div className='Radio'>
        <label>
          <input type='radio' value='Flores' />
            Flores
        </label>
      </div>
      <div className='Radio'>
        <label>
          <input type='radio' value='niño' />
           Día del niño
        </label>
      </div>
    </form>

    <div className='Card__title'>
      <h3>Rango de Precios</h3>
    </div>

    <div className='Radio'>
      <label
        htmlFor='/'
        placeholder='Elige una opción'
      />
      <select id='precio' className='Price'>
        <option>Debajo de $100</option>
        <option>$100 a $200</option>
        <option>$200 a $300</option>
        <option>$300 a $400</option>
        <option>$400 a $500</option>
        <option>$500 a más</option>

      </select>
    </div>

  </div>
);

// const getData = (api) => {
//   fetch(api) //se hace un fetch y se obtiene el json en un objeto llamado response
//     .then((response) => response.json())
//     .then((response) => {
//       const stores = response.results; //se declara la variable productos que tiene los resultados
//       const output = store
//         .map((store) => { //recorre el listado de productos
//           return `
//           <div className='Radio'>
//           <label>
//             <input type='radio' value='${store.slug}' />
//              ${store.name}
//           </label>
//         </div>
//       `;
//           // regresa un articulo con foto, nombre y id
//         })
//         .join('');
//       const newItem = document.createElement('section');
//       newItem.classList.add('Items');
//       newItem.innerHTML = output;
//       $card.appendChild(newItem); //se renderiza el articulo dentro del observador
//     })
//     .catch((error) => console.log(error)); //cachar el error en consola
// };
// //busca la nueva url de manera asincrona para obtener las siguientes paginas
// const loadData = async () => {
//   const nextUrl = localStorage.getItem('next_fetch');
//   if (nextUrl) {
//     await getData(nextUrl);
//   }
//   if (nextUrl === null) {
//     await getData(API);
//   }
//   if (nextUrl === '') {
//     creatingEndMessage();
//     intersectionObserver.unobserve($card);
//   }
// };
// //se crea el objeto observador donde se cargan los datos
// const intersectionObserver = new IntersectionObserver(
//   (entries) => {
//     if (entries[0].isIntersecting) {
//       loadData();
//     }
//   },
//   {
//     rootMargin: '0px 0px 100% 0px',
//   },
// );

// intersectionObserver.observe($card);

export default Card;

