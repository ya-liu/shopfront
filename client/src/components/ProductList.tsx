import { ShopifyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: ShopifyProduct[];
  // query: string;
}

const ProductList = ({ products }: ProductListProps): JSX.Element => {
  let displayList;
  displayList = products;
  // if (!query) {
  //   displayList = products;
  // } else {
  //   displayList = products.filter((product) => product.title.toLowerCase().includes(query));
  // }

  return (
    <div className="display-products">
      <ul>
        {displayList.map((product: ShopifyProduct) => (
          <ProductEntry product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList;
