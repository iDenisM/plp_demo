import './Slider.css'
import React from 'react';
import { ProductType } from '../../defaults/types';

type SliderProps = {
  products: ProductType[],
  slidesPerView: number
}

type SliderState = {
  index: number
}

export default class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props)

    this.state = {
      index: 0
    }
  }

  _moveNext() {
    if (this.props.products.length - this.props.slidesPerView > this.state.index) {
      this.setState({index: this.state.index + 1 })
    }
  }

  _movePrev() {
    if (this.state.index !== 0) {
      this.setState({index: this.state.index - 1 })
    }
  }

  render() {
    const translate = `translate3d(-${96 * this.state.index}px, 0, 0)`;
    return (
      <div className="slider">
        {
          this.props.products.length > 3 && (
            <button onClick={this._movePrev.bind(this)} className="slider__btn slider__btn--prev">
              <span className="text is-vHidden">Previous slide</span>
              <span className="icon"></span>
            </button>
          )
        }
        <div className="slider__slides">
          <div className="slider__wrapper" style={{transform: translate}}>
            {
              this.props.products.map((product, index) => (
                <div key={product.UPC} className="slider__slide">
                  <img className="slider__slide__img" src="https://via.placeholder.com/80x50" alt={`representation of the ${product.name} product`}/>
                  <div className="slider__slide__index">{index + 1}</div>
                </div>
              ))
            }
          </div>
        </div>
        {
          this.props.products.length > 3 && (
            <button onClick={this._moveNext.bind(this)} className="slider__btn slider__btn--next">
              <span className="text is-vHidden">Next slide</span>
              <span className="icon"></span>
            </button>
          )
        }
      </div>
    )
  }
}