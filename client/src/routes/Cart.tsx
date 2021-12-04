// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ShopifyProduct, CartInfo } from '../interfaces';
import CartProduct from '../components/CartProduct';

type CartProps = {
  cart: CartInfo[];
  updateCart: (product: ShopifyProduct, quantity: number) => void;
  removeItem: (product: ShopifyProduct) => void;
  updateTotal: () => void;
  totalAmount: number;
}

const Cart = ({ cart, updateCart, removeItem, totalAmount, updateTotal }: CartProps) => {

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography component="h2" variant="h4" align="center" gutterBottom>
        Cart
      </Typography>
      <Grid container spacing={2}>
        {cart.map((entry: CartInfo) =>
        (<CartProduct
          product={entry.item}
          key={entry.item.id}
          initialQuantity={entry.quantity}
          updateCart={updateCart}
          removeItem={removeItem}
        />)
        )}
      </Grid>
      <Typography variant="subtitle1" gutterBottom>
        Total Amount: {`$${totalAmount}`}
      </Typography>
      <Link to="/checkout"><Button variant="contained">Check Out</Button></Link>
    </Container>
  )
}

export default Cart;
