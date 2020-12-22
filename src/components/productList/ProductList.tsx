import './ProductList.css'
import { useState, useEffect } from 'react';
import Product from '../product/Product';
import { ProductType, RootState } from '../../defaults/types';
import { useSelector } from 'react-redux';

type ProductListProps = {
  categoryName: string
}



const ProductList = (props: ProductListProps) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const selectSearchProduct = (state: RootState) => state.textSearch;
  const textSearch = useSelector(selectSearchProduct);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://assets.fc-dev.instore.oakley.com/assets/products/${props.categoryName}.json`);
        const products = await response.json();
        setIsLoaded(true);
        setProducts(products);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }

    fetchData();
  }, []);

  if (error) {
    return <div>An error has occured</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else if (!products.length) {
    return <div>No products were found</div>
  } else {
    const filterMap = {
      All: () => true,
      Filtered: (product: ProductType) => product.name.toLocaleLowerCase().includes(textSearch)
    }
    const task = textSearch ? 'Filtered' : 'All';

    return (
      <div className="products">
        {
          products.filter(filterMap[task]).map(product => (
            <Product {...product} key={product.UPC} />
          ))
        }
      </div>
    )
  }
}

export default ProductList;