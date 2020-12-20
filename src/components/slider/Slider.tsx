import './Slider.css'
import React from 'react';
import { ProductType } from '../../defaults/types';

type SliderProps = {
  products: ProductType[]
}

export default class Slider extends React.Component<SliderProps, {}> {
  constructor(props: SliderProps) {
    super(props)
  }

  render() {
    return (
      <div>
        <button>
          <span className="text">Previous slide</span>
          <span className="icon"></span>
        </button>
        <div className="wrapper">
          {
            this.props.products.map(product => (
              <div key={product.UPC} className="slide">
                <img src="https://via.placeholder.com/80x50" alt={`representation of the ${product.name} product`}/>
              </div>
            ))
          }
        </div>
        <button>
          <span className="text">Next slide</span>
          <span className="icon"></span>
        </button>
      </div>
    )
  }
}