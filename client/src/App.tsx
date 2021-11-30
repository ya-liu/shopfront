import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  type Message = string;
  const [message, setMessage] = useState<Message | undefined>(undefined);

  useEffect(() => {
    fetch(`/api`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

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
      <ProductList />
      <Button variant="contained">Add to Cart</Button>
    </div>
  );
}

export default App;

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the shop!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}