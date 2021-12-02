import { useEffect } from 'react';
import { ShopifyProduct, CartInfo } from '../interfaces';
import CartProduct from '../components/CartProduct';

type CartProps = {
  cart: CartInfo[];
  updateCart: (product: ShopifyProduct, quantity: number) => void;
  removeItem: (product: ShopifyProduct) => void;
}

const Cart = ({ cart, updateCart, removeItem }: CartProps) => {
  useEffect(() => {
    console.log(cart);
  }, [cart])

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
      </main>
    </>
  )
}

export default Cart;
