import React from 'react';
import '../assets/styles/components/Filter.scss';

const API = 'https://canastarosa.com/services/api/v1/market/categories/';

const Filter = () => (

  <div className='filter__base'>
    <div className='filter__content'>
      <label htmlFor='/' placeholder='/'>Filtrar por</label>
      <select id='precio' className='order'>
        <option>Nombre</option>
        <option>Precio</option>
        <option>Fecha</option>

      </select>
    </div>

  </div>
);

export default Filter;
