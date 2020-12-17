import './Slider.css'

type SliderProps = {
  images: string[]
}

const Slider = (props: SliderProps) => (
  <div>
    <button>
      <span className="text">Previous slide</span>
      <span className="icon"></span>
    </button>
    <div className="wrapper">
      {
        props.images.map(img => (
          <div className="slide">
            <img src={img} alt="product variant image"/>
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

export default Slider;