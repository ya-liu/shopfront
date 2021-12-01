import ProductList from '../components/ProductList';
import { dummyData } from '../dummyData';

const GetProductsController = () => {
  return (
    <ProductList products={dummyData} />
  )
}

export default GetProductsController;
