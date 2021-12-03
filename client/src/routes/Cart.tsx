import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
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

  useEffect(() => {
    updateTotal();
  }, [cart, updateTotal]);

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <h2>Cart</h2>
      <div className="cart-list">
        {cart.map((entry: CartInfo) =>
        (<CartProduct
          product={entry.item}
          key={entry.item.id}
          initialQuantity={entry.quantity}
          updateCart={updateCart}
          removeItem={removeItem}
        />)
        )}
      </div>
      <div className="total-amount">
        Total Amount: {`$${totalAmount}`}
      </div>
      <Link to="/checkout"><Button variant="contained">Check Out</Button></Link>
    </Container>
  )
}

export default Cart;
