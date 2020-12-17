import './Slider.css'
import React from 'react';

type SliderProps = {
  images: string[]
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
            this.props.images.map(img => (
              <div className="slide">
                <img src={img} alt="product variant"/>
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