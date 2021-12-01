import { useState, useEffect } from 'react';
import { Product } from '../interfaces';
import ProductList from '../components/ProductList';

const GetProductsController = () => {
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  useEffect(() => {
    fetch(`api`)
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
