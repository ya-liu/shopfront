import { useState, useEffect } from 'react';
import Product from './Product';
import { ShopifyProduct } from '../interfaces';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

type ProductProps = {
  product: ShopifyProduct;
  initialQuantity: number;
  updateCart: (product: ShopifyProduct, quantity: number) => void;
  removeItem: (product: ShopifyProduct) => void;
}

const CartProduct = ({ product, initialQuantity, updateCart, removeItem }: ProductProps): JSX.Element => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const inventory = product.variants[0].inventory_quantity;

  useEffect(() => {
    console.log(quantity);
  }, [quantity])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(Number(e.target.value));
  }

  const minusClickHandler = (): void => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
    updateCart(product, quantity);
  }

  const plusClickHandler = (): void => {
    quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory);
    updateCart(product, quantity);
  }

  return (
    <Grid item xs={12}>
      <Product product={product} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            onClick={minusClickHandler}
          >
            -
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            type="number"
            value={quantity}
            variant="standard"
            size="small"
            onChange={onChangeHandler}
            inputProps={{ min: "0", max: { inventory }, step: "1", style: { textAlign: "center" } }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            onClick={plusClickHandler}
          >
            +
          </Button>
        </Grid>
      </Grid>
      <Button onClick={() => removeItem(product)}>Remove Item</Button>
    </Grid>
  );
};

export default CartProduct;
