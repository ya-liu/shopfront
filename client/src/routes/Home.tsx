import { useState } from 'react';
import { ShopifyProduct } from '../interfaces';
import ProductList from '../components/ProductList';

type HomeProps = {
  products: ShopifyProduct[];
  addToCart: (product: ShopifyProduct) => void;
}

type ProductQuery = string;

export default function Home({ products, addToCart }: HomeProps) {
  const [productQuery, setProductQuery] = useState<ProductQuery>('');
  const [finalQuery, setFinalQuery] = useState<ProductQuery>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProductQuery(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFinalQuery(productQuery);
  }

  return (
    <>
      <main>
        <h2>Welcome to the shop!</h2>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="product"
            onChange={onChange}
            placeholder="search for a product"
          />
          <input type="submit" value="Go" />
        </form>
        <ProductList products={products} query={finalQuery} addToCart={addToCart} />
      </main>
    </>
  );
}