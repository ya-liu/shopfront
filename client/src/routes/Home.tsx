import { useState } from 'react';
import { Link } from "react-router-dom";
import GetProductsController from '../controllers/GetProductsController';

type Product = string;

export default function Home() {
  const [product, setProduct] = useState<Product | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProduct(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(product);
  }

  return (
    <>
      <nav>
        <Link to="/about">About Us</Link>
      </nav>
      <main>
        <h2>Welcome to the shop!</h2>
        <p>You can do this, I believe in you.</p>
        <form onSubmit={onSubmit}>
          <input type="text" id="product" onChange={onChange} />
          <input type="submit" value="Search" />
        </form>
        <GetProductsController />
      </main>
    </>
  );
}