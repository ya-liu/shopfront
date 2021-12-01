import { useState } from 'react';
import Product from './Product';
import { ShopifyProduct } from '../interfaces';

type ProductProps = {
  product: ShopifyProduct;
}

const CartProduct = ({ product }: ProductProps): JSX.Element => {
  const [quantity, setQuantity] = useState(1);
  const inventory = product.variants[0].inventory_quantity;

  return (
    <>
      <Product product={product} />
      <div className="quantity buttons_added">
        <input type="button" value="-" className="minus" onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0) }} />
        <input type="number" step="1" min="0" max={inventory} name="quantity" value={quantity} title="Qty" className="input-text qty text" />
        <input type="button" value="+" className="plus" onClick={() => { quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory) }} />
      </div>
    </>
  );
};

export default CartProduct;