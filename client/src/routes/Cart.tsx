import { useState, useEffect } from "react";
import { dummyProduct } from '../interfaces';
// import ProductEntry from "../components/ProductEntry";
import { dummyData } from "../dummyData";

export default function Cart() {
  const [cart, setCart] = useState<dummyProduct[]>([]);
  useEffect(() => {
    setCart(dummyData);
  }, []);

  return (
    <>
      <main>
        <h2>Cart</h2>
        <div className="cart-list">
          <ul>
            {cart.map((product: dummyProduct) => (<li>{product.name}</li>))}
          </ul>
        </div>
      </main>
    </>
  )
}

// (
//   <ProductEntry product={product} key={product.id} />
// )