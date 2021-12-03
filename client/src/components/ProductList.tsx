import Grid from '@mui/material/Grid';
import { ShopifyProduct } from '../interfaces';
import ProductEntry from './ProductEntry';

type ProductListProps = {
  products: ShopifyProduct[];
  query: string;
  addToCart: (product: ShopifyProduct) => void;
}

const ProductList = ({ products, query, addToCart }: ProductListProps): JSX.Element => {
  let displayList;
  if (!query) {
    displayList = products;
  } else {
    displayList = products.filter((product) => product.title.toLowerCase().includes(query));
  }

  return (
    <div className="display-products">
      <Grid container spacing={2}>
        {displayList.map((product: ShopifyProduct) => (
          <ProductEntry product={product} key={product.id} addToCart={addToCart} />
        ))}
      </Grid>
    </div>
  )
}

export default ProductList;
