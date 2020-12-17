import './ProductList.css'
import React from 'react';
import Product from '../product/Product';

type ProductListState = {
  products: number[]
}

export default class ProductList extends React.Component<{}, ProductListState> {
  render() {
    return (
      <div>
        {
          [1,2,3].map(p => (
            <Product key={p} />
          ))
        }
      </div>
    );
  }
}