import { ShopifyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: ShopifyProduct[];
  query: string;
  addToCart: (product: ShopifyProduct, quantity: number) => void;
}

const ProductList = ({ products, query, addToCart }: ProductListProps): JSX.Element => {
  let displayList;
  if (!query) {
    displayList = products;
  } else {
    displayList = products.filter((product) => product.title.toLowerCase().includes(query));
  }

  return (
    <div className="display-products">
      {displayList.map((product: ShopifyProduct) => (
        <ProductEntry product={product} key={product.id} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductList;
