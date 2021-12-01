import { dummyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: dummyProduct[];
}

const ProductList = ({ products }: ProductListProps): JSX.Element => (
  <div>
    This is a list of products
    <ul>
      {products.map((product: dummyProduct) => (
        <ProductEntry product={product} key={product.id} />
      ))}
    </ul>
  </div>
)

export default ProductList;
