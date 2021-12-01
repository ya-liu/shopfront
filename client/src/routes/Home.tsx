import { useState } from 'react';
import { Link } from "react-router-dom";
import GetProductsController from '../controllers/GetProductsController';

type ProductQuery = string;

export default function Home() {
  const [productQuery, setProductQuery] = useState<ProductQuery | ''>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProductQuery(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(productQuery);
  }

  return (
    <>
      <nav>
        <Link to="/about">About Us</Link>
      </nav>
      <main>
        <h2>Welcome to the shop!</h2>
        <form onSubmit={onSubmit}>
          <input type="text" id="product" onChange={onChange} />
          <input type="submit" value="Search" />
        </form>
        <GetProductsController query={productQuery} />
      </main>
    </>
  );
}