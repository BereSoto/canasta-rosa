import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (

  <header className='header'>
    <div className='header__content'>
      <div className='Header__column'>
        <p>canastarosa</p>
      </div>
      <div className='header__column'>
        <ul className='header__menu'>
          <li className='header__list'>Market</li>
          <li className='header__list'>Inspire</li>
          <li className='header__list'>Pro</li>
        </ul>
        <p className='line'>|</p>
        <input
          type='text'
          className='leader__search'
          placeholder=' Buscar...'
        />
        <p className='line'>|</p>

      </div>

    </div>

  </header>
);

export default Header;

