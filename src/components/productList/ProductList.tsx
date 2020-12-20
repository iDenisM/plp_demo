import './ProductList.css'
import React from 'react';
import Product from '../product/Product';
import { ProductType } from '../../defaults/types';

type ProductListProps = {
  categoryName: string
}

type ProductListState = {
  products: ProductType[]
}

export default class ProductList extends React.Component<ProductListProps, ProductListState> {
  constructor(props: ProductListProps) {
    super(props);

    this.state = {
      products: []
    };
  }
  
  /**
   * @description get the product list based on the category name
   */
  componentDidMount() {
    this._getProductListData();
  }

  async _getProductListData() {
    try {
      const response = await fetch(`https://assets.fc-dev.instore.oakley.com/assets/products/${this.props.categoryName}.json`);
      const products = await response.json();
      this.setState({products});
    } catch (error) {
      console.error('There has been an error while getting the products', error);
    }
  }

  render() {
    const products = this.state.products;
    const tempate = products.length > 0 ? (
      <div className="products">
            {
              products.map(p => (
                <Product {...p} key={p.UPC} />
              ))
            }
          </div>
    ): (
      <div>Loading...</div>
    )

    return ( tempate );
  }
}