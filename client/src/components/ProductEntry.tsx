import { ShopifyProduct } from '../interfaces';
import Product from './Product';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type ProductEntryProps = {
  product: ShopifyProduct;
  addToCart: (product: ShopifyProduct) => void;
}

const ProductEntry = ({ product, addToCart }: ProductEntryProps): JSX.Element => {
  let body;
  if (product.body_html.startsWith('<')) {
    body = product.body_html.replace(/(<([^>]+)>)/ig, '');
  } else {
    body = product.body_html;
  }

  return (
    <Grid item xs={12} sm={6}>
      <Card sx={{ maxWidth: 345 }}>
        <Product product={product} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </Card>
    </Grid>
  );
};

export default ProductEntry;