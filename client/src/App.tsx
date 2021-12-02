import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import { ShopifyProduct, CartInfo } from "./interfaces";
import Home from "./routes/Home";
import Header from './components/Header';
import Catalog from "./routes/Catalog";
import About from './routes/About';
import NoMatch from "./components/NoMatch";
import Cart from './routes/Cart';

type AppProps = {
  products: ShopifyProduct[];
}

const App = ({ products }: AppProps) => {
  const [cart, setCart] = useState<CartInfo[]>([]);

  const addToCart = (product: ShopifyProduct, quantity: number): void => {
    let copy = cart;
    let found = copy.findIndex(entry => entry.item.id === product.id);
    if (found < 0) {
      copy.push({item: product, quantity: 1})
    } else {
      if (quantity < product.variants[0].inventory_quantity) {
        copy[found].quantity++;
      } else {
        copy[found].quantity = product.variants[0].inventory_quantity;
      }
    }
    setCart(copy);
  }

  const updateCart = (product: ShopifyProduct, quantity: number): void => {
    let copy = cart;
    copy.forEach((entry) => {
      if (entry.item.id === product.id) {
        entry.quantity = quantity;
      }
    })
    setCart(copy);
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home products={products} addToCart={addToCart} />} />
        <Route path="catalog" element={<Catalog products={products} addToCart={addToCart} />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart cart={cart} updateCart={updateCart} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
