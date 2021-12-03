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
    // console.log(quantity);
    updateCart(product, quantity);
  }, [quantity, product, updateCart])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(Number(e.target.value));
  }

  return (
    <Grid item xs={12}>
      <Product product={product} />
      <div className="quantity buttons_added">
        <Button
          variant="outlined"
          onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0) }}
        >
          -
        </Button>
        <TextField
          type="number"
          value={quantity}
          variant="standard"
          size="small"
          onChange={onChangeHandler}
          inputProps={{ min: "0", max: {inventory}, step: "1" }}
        />
        <Button
          variant="outlined"
          onClick={() => { quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory) }}
        >
          +
        </Button>
      </div>
      <button onClick={() => removeItem(product)}>Remove Item</button>
    </Grid>
  );
};

export default CartProduct;
