import { ShopifyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: ShopifyProduct[];
}

const ProductList = ({ products }: ProductListProps): JSX.Element => (
  <div>
    Products from store: {products[0].vendor}
    <ul>
      {products.map((product: ShopifyProduct) => (
        <ProductEntry product={product} key={product.id} />
      ))}
    </ul>
  </div>
)

export default ProductList;
