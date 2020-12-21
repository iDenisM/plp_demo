import React from 'react';
import './App.css';
import Header from '../header/Header'
import ProductList from '../productList/ProductList';
import Footer from '../footer/Footer';
import { SearchAction } from '../../defaults/types';

const search = (newSearch: string): SearchAction => {
  return {
    type: 'SEARCHING',
    payload : newSearch
  }
}

const App = () => {
  const categoryName = 'products';

  return (
    <div className="App">
      <Header />
      <main>
        <ProductList categoryName={categoryName}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
