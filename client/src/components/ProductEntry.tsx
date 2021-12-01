import { ShopifyProduct } from '../interfaces';
import Product from './Product';
import Button from '@mui/material/Button';

type ProductEntryProps = {
  product: ShopifyProduct;
  updateCart: (product: ShopifyProduct) => void;
}

const ProductEntry = ({ product, updateCart }: ProductEntryProps): JSX.Element => {
  let body;
  if (product.body_html.startsWith('<')) {
    body = product.body_html.replace(/(<([^>]+)>)/ig, '');
  } else {
    body = product.body_html;
  }

  return (
    <>
      <Product product={product} />
      {body}
      <br />
      <Button variant="contained" onClick={() => updateCart(product)}>Add to Cart</Button>
    </>
  );
};

export default ProductEntry;