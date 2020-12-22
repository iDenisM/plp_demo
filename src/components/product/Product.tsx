import './Product.css';
import Slider from '../slider/Slider';
import { ProductType } from '../../defaults/types';

const Product = (props: ProductType) => (
  <div className="product">
    <div className="product__preview">
      <img className="product__img" src="https://via.placeholder.com/600" alt={`representation of the ${props.name} product`} />
    </div>
    {
      props.price.current?.value !== undefined && (
        <div className="product__price">
          <span className="product__currency">{props.price?.currency}</span>
          <span className="product__value">{props.price.current?.value}</span>
          {
            props.availability?.stock === 0 && (
              <span className="product__soldout">Sold Out</span>
            )
          }
        </div>
      )
    }
    <div className="product__name">{props.name ? props.name : ''}</div>
    {
      props.variants.length > 0 && (
        <Slider products={props.variants} />
      )
    }
  </div>
);

export default Product;
