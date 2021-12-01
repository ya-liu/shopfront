import { useState, useEffect } from 'react';
import App from '../App';
import { ShopifyProduct } from '../interfaces';

const GetProductsController = () => {
  const [products, setProducts] = useState<ShopifyProduct[] | undefined>(undefined);

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((products) => setProducts(products))
  }, []);

  return (
    <>
      {!products ? 'Loading...' : (<App products={products} />)}
    </>
  );
}

export default GetProductsController;
