import React from 'react';
import './App.css';
import Header from '../header/Header'
import ProductList from '../productList/ProductList';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
