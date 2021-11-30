import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Home from './routes/Home';
import About from './routes/About';
import { dummyData } from './dummyData';

type Message = string;
type Product = string;

const App = () => {
  const [message, setMessage] = useState<Message | undefined>(undefined);
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(e.target.value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <p>
        {!message ? 'Loading...' : message}
      </p>
      <ProductList products={dummyData} />
      <form onSubmit={onSubmit}>
        <input type="text" id="product" onChange={onChange} />
        <input type="submit" value="Search" />
      </form>
      <Button variant="contained">Add to Cart</Button>
    </div>
  );
}

export default App;
