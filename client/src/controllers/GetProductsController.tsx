import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
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
      {!products ? 'Loading...' : (<ProductList products={products} />)}
    </>
  );
}

export default GetProductsController;
