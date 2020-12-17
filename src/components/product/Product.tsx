import './Product.css';
import Slider from '../slider/Slider';

const Product = () => (
  <div>
    <img src="https://via.placeholder.com/600" alt="product name" />
    <div>Produc Price</div>
    <div>Produc Name</div>
    <Slider images={['https://via.placeholder.com/80x50', 'https://via.placeholder.com/80x50', 'https://via.placeholder.com/80x50']} />
  </div>
);

export default Product;
