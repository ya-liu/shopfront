import { product } from '../interfaces';
import ProductEntry from './ProductEntry';

interface ProductListProps {
  products: product[];
}

const ProductList = ({ products }: ProductListProps) => (
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
