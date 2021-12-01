import { ShopifyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: ShopifyProduct[];
  query: string;
  updateCart: (product: ShopifyProduct) => void;
}

const ProductList = ({ products, query, updateCart }: ProductListProps): JSX.Element => {
  let displayList;
  if (!query) {
    displayList = products;
  } else {
    displayList = products.filter((product) => product.title.toLowerCase().includes(query));
  }

  return (
    <div className="display-products">
      <ul>
        {displayList.map((product: ShopifyProduct) => (
          <ProductEntry product={product} key={product.id} updateCart={updateCart} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList;
