import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { ShopifyProduct, CartInfo } from "./interfaces";
import Home from "./routes/Home";
import Header from './components/Header';
import Catalog from "./routes/Catalog";
import About from './routes/About';
import Cart from "./routes/Cart";
import NoMatch from "./components/NoMatch";

type AppProps = {
  products: ShopifyProduct[];
}

const App = ({ products }: AppProps) => {
  const [cart, setCart] = useState<CartInfo[]>([]);
  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const addToCart = (product: ShopifyProduct, quantity: number): void => {
    let copy = cart;
    copy.push({item: product, quantity: 1})
    setCart(copy);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home products={products} addToCart={addToCart} />} />
        <Route path="catalog" element={<Catalog products={products} addToCart={addToCart} />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart cart={cart} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
