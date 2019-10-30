import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <div className='Container'>
      <Card />
      <Filter />
      <ProductList />

    </div>

  </div>

);

export default App;
