import { ShopifyProduct } from '../interfaces';
import Product from './Product';
import Button from '@mui/material/Button';

type ProductEntryProps = {
  product: ShopifyProduct;
  addToCart: (product: ShopifyProduct, quantity: number) => void;
}

const ProductEntry = ({ product, addToCart }: ProductEntryProps): JSX.Element => {
  let body;
  if (product.body_html.startsWith('<')) {
    body = product.body_html.replace(/(<([^>]+)>)/ig, '');
  } else {
    body = product.body_html;
  }

  return (
    <div>
      <Product product={product} />
      {body}
      <br />
      <Button variant="contained" onClick={() => addToCart(product, 1)}>Add to Cart</Button>
    </div>
  );
};

export default ProductEntry;