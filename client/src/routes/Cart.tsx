import { ShopifyProduct } from '../interfaces';
import Product from '../components/Product';

type CartProps = {
  cart: ShopifyProduct[]
}

export default function Cart({ cart }: CartProps) {
  return (
    <>
      <main>
        <h2>Cart</h2>
        <div className="cart-list">
          <ul>
            {cart.map((product: ShopifyProduct) => (<Product product={product} key={product.id} />))}
          </ul>
        </div>
      </main>
    </>
  )
}

// (
//   <ProductEntry product={product} key={product.id} />
// )