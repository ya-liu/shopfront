import { useState } from 'react';
import { ShopifyProduct } from '../interfaces';
import ProductList from '../components/ProductList';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFinalQuery(productQuery);
  }

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Typography component="h2" variant="h4" align="center" gutterBottom>
          Welcome to the shop!
        </Typography>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="product"
            onChange={onChange}
            placeholder="search for a product"
          />
          <input type="submit" value="Go" />
        </form>
        <ProductList products={products} query={finalQuery} addToCart={addToCart} />
      </Container>
    </>
  );
}

{/* <Grid container spacing={2}>
<Grid item xs={8} sm={4}>
  <TextField
    id="product"
    name="product"
    label="Search for a product"
    fullWidth
    onChange={onChange}
  />
</Grid>
<Grid item xs={4} sm={2}>
  <Button type="submit" variant="contained">Go</Button>
</Grid>
</Grid> */}