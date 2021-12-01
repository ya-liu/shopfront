import { ShopifyProduct } from '../interfaces';
import Product from './Product';
import Button from '@mui/material/Button';

type ProductEntryProps = {
  product: ShopifyProduct;
}

const ProductEntry = ({ product }: ProductEntryProps): JSX.Element => {
  return (
    <>
      <Product product={product} />
      <Button variant="contained">Add to Cart</Button>
    </>
  );
};

export default ProductEntry;