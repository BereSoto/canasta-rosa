import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (

  <header className='Header'>
    <div className='Header__content'>
      <div className='Header__column'>
        <p>canastarosa</p>
      </div>
      <div className='Header__column'>
        <ul className='Header__menu'>
          <li className='Header__list'>Market</li>
          <li className='Header__list'>Inspire</li>
          <li className='Header__list'>Pro</li>
        </ul>
        <p className='Line'>|</p>
        <input
          type='text'
          className='Header__search'
          placeholder=' Buscar...'
        />
        <p className='Line'>|</p>

      </div>

    </div>

  </header>
);

export default Header;

