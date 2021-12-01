import { ShopifyProduct } from '../interfaces';
import Button from '@mui/material/Button';

type ProductEntryProps = {
  product: ShopifyProduct;
}

const ProductEntry = ({ product }: ProductEntryProps): JSX.Element => {
  let body;
  if (product.body_html.startsWith('<')) {
    body = product.body_html.replace(/(<([^>]+)>)/ig, '');
  } else {
    body = product.body_html;
  }

  return (
    <>
      <li className="card">
        {product.image && <img src={product.image.src} alt="product" style={{width: "300px", height: "200px"}} />}
        <br />
        {product.title}
        <br />
        {body}
        <br />
        Price: ${product.variants[0].price}
      </li>
      <Button variant="contained">Add to Cart</Button>
    </>
  );
};

export default ProductEntry;