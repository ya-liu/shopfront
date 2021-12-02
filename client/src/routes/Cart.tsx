import { ShopifyProduct, CartInfo } from '../interfaces';
import CartProduct from '../components/CartProduct';

type CartProps = {
  cart: CartInfo[];
  updateCart: (product: ShopifyProduct, quantity: number) => void;
}

const Cart = ({ cart, updateCart }: CartProps) => {
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
          />)
          )}
        </div>
      </main>
    </>
  )
}

export default Cart;
