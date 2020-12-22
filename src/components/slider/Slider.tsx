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
      <div className="slider">
        {
          this.props.products.length > 3 && (
            <button className="slider__btn slider__btn--prev">
              <span className="text">Previous slide</span>
              <span className="icon"></span>
            </button>
          )
        }
        <div className="slider__slides">
          {
            this.props.products.map(product => (
              <div key={product.UPC} className="slider__slide">
                <img className="slider__slide__img" src="https://via.placeholder.com/80x50" alt={`representation of the ${product.name} product`}/>
              </div>
            ))
          }
        </div>
        {
          this.props.products.length > 3 && (
            <button className="slider__btn slider__btn--next">
              <span className="text">Next slide</span>
              <span className="icon"></span>
            </button>
          )
        }
      </div>
    )
  }
}