import { Product } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => (
  <div>
    This is a list of products
    <ul>
      {products.map((product: Product) => (
        <ProductEntry product={product} key={product.id} />
      ))}
    </ul>
  </div>
)

export default ProductList;
