import { ShopifyProduct } from '../interfaces';
import CartProduct from '../components/CartProduct';

type CartProps = {
  cart: ShopifyProduct[]
}

export default function Cart({ cart }: CartProps) {
  return (
    <>
      <main>
        <h2>Cart</h2>
        <div className="cart-list">
          {cart.map((product: ShopifyProduct) =>
            (<CartProduct product={product} key={product.id} />)
          )}
        </div>
      </main>
    </>
  )
}

// (
//   <ProductEntry product={product} key={product.id} />
// )