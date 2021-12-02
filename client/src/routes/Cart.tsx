import { useEffect } from 'react';
import Button from '@mui/material/Button';
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
    console.log(totalAmount);
  }, [cart, totalAmount, updateTotal]);

  return (
    <>
      <main>
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
        <div>
          Total Amount: ${totalAmount}
        </div>
        <Button>Check Out</Button>
      </main>
    </>
  )
}

export default Cart;
