// import { useState } from 'react';
import Product from './Product';
import { ShopifyProduct } from '../interfaces';

type ProductProps = {
  product: ShopifyProduct;
  quantity: number;
}

const CartProduct = ({ product, quantity }: ProductProps): JSX.Element => {
  const inventory = product.variants[0].inventory_quantity;

  return (
    <>
      <Product product={product} />
      <div className="quantity buttons_added">
        <input type="button" value="-" className="minus" />
        <input
          type="number"
          step="1"
          min="0"
          max={inventory}
          name="quantity"
          value={quantity}
          className="input-text qty text"
        />
        <input type="button" value="+" className="plus" />
      </div>
    </>
  );
};

export default CartProduct;

// onClick={() => { quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory) }}
// onClick={() => { quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0) }}