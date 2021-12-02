import { CartInfo } from '../interfaces';
import CartProduct from '../components/CartProduct';

type CartProps = {
  cart: CartInfo[]
}

export default function Cart({ cart }: CartProps) {
  return (
    <>
      <main>
        <h2>Cart</h2>
        <div className="cart-list">
          {cart.map((entry: CartInfo) =>
            (<CartProduct product={entry.item} key={entry.item.id} quantity={entry.quantity} />)
          )}
        </div>
      </main>
    </>
  )
}

// (
//   <ProductEntry product={product} key={product.id} />
// )