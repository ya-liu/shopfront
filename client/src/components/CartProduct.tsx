import { useState } from 'react';
import Product from './Product';
import { ShopifyProduct } from '../interfaces';

type ProductProps = {
  product: ShopifyProduct;
  initialQuantity: number;
  updateCart: (product: ShopifyProduct, quantity: number) => void;
}

const CartProduct = ({ product, initialQuantity, updateCart }: ProductProps): JSX.Element => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const inventory = product.variants[0].inventory_quantity;

  return (
    <>
      <Product product={product} />
      <div className="quantity buttons_added">
        <input
          type="button"
          value="-"
          className="minus"
          onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0) }}
        />
        <input
          type="number"
          step="1"
          min="0"
          max={inventory}
          name="quantity"
          value={quantity}
          className="input-text qty text"
          onChange={() => {updateCart(product, quantity)}}
        />
        <input
          type="button"
          value="+"
          className="plus"
          onClick={() => { quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory) }}
        />
      </div>
    </>
  );
};

export default CartProduct;

// onClick={() => { quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory) }}
// onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0) }}