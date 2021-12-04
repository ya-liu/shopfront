import { useState } from 'react';
import { ShopifyProduct } from '../interfaces';
import ProductList from '../components/ProductList';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type HomeProps = {
  products: ShopifyProduct[];
  addToCart: (product: ShopifyProduct) => void;
}

type ProductQuery = string;

export default function Home({ products, addToCart }: HomeProps) {
  const [productQuery, setProductQuery] = useState<ProductQuery>('');
  const [finalQuery, setFinalQuery] = useState<ProductQuery>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProductQuery(e.target.value);
  }

  const onSubmit = (): void => {
    setFinalQuery(productQuery);
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      onSubmit();
    };
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        Welcome to the shop!
      </Typography>
      <Grid container>
        <Grid item sm={10}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            label="Search for a product"
            onChange={onChange}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item sm={2}>
          <Button
            type="submit"
            size="large"
            onClick={onSubmit}
          >
            Go!
          </Button>
        </Grid>
      </Grid>
      <br />
      <ProductList products={products} query={finalQuery} addToCart={addToCart} />
    </Container>
  );
}
