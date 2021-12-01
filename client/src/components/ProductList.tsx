import { ShopifyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: ShopifyProduct[];
  query: string;
}

const ProductList = ({ products, query }: ProductListProps): JSX.Element => {
  let displayList;
  if (!query) {
    displayList = products;
  } else {
    displayList = products.filter((product) => product.title.toLowerCase().includes(query));
  }

  return (
    <div>
      Products from store: {products[0].vendor}
      <ul>
        {displayList.map((product: ShopifyProduct) => (
          <ProductEntry product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}


export default ProductList;
