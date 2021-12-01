import { useState } from 'react';
import { ShopifyProduct } from '../interfaces';
import ProductList from '../components/ProductList';

type ProductListProps = {
  products: ShopifyProduct[];
  // query: string;
}

type ProductQuery = string;

export default function Home({ products }: ProductListProps) {
  const [productQuery, setProductQuery] = useState<ProductQuery>('');
  // const [finalQuery, setFinalQuery] = useState<ProductQuery>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProductQuery(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(productQuery);
    // setFinalQuery(productQuery);
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
        <ProductList products={products} />
      </main>
    </>
  );
}