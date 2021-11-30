import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Button from '@mui/material/Button';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Home from './routes/Home';
import About from './routes/About';

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
