import { ShopifyProduct } from "../interfaces";
import ProductList from '../components/ProductList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type CatalogProps = {
  products: ShopifyProduct[];
  addToCart: (product: ShopifyProduct) => void;
}

export default function Catalog({ products, addToCart }: CatalogProps) {
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        All products at espresso all day:
      </Typography>
      <ProductList products={products} query='' addToCart={addToCart} />
    </Container>
  );
}