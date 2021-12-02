import { useState, useEffect } from 'react';
import Product from './Product';
import { ShopifyProduct } from '../interfaces';

type ProductProps = {
  product: ShopifyProduct;
  initialQuantity: number;
  updateCart: (product: ShopifyProduct, quantity: number) => void;
  removeItem: (product: ShopifyProduct) => void;
}

const CartProduct = ({ product, initialQuantity, updateCart, removeItem }: ProductProps): JSX.Element => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const inventory = product.variants[0].inventory_quantity;

  useEffect(() => {
    // console.log(quantity);
    updateCart(product, quantity);
  }, [quantity, product, updateCart])

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuantity(Number(e.target.value));
  }

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
          onChange={onChangeHandler}
        />
        <input
          type="button"
          value="+"
          className="plus"
          onClick={() => { quantity < inventory ? setQuantity(quantity + 1) : setQuantity(inventory) }}
        />
      </div>
      <button onClick={() => removeItem(product)}>Remove Item</button>
    </>
  );
};

export default CartProduct;
