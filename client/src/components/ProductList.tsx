import { product } from '../dummyData';
import ProductEntry from './ProductEntry';

const ProductList = ({ products }) => (
  <div>
    This is a list of products
    <ul>
      {products.map((product: product) => (
        <ProductEntry product={product} key={product.id} />
      ))}
    </ul>
  </div>
)

export default ProductList;
