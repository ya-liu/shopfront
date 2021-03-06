import { useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import { ShopifyProduct, CartInfo } from "./interfaces";
import Home from "./routes/Home";
import Header from './components/Header';
import Footer from "./components/Footer";
import Catalog from "./routes/Catalog";
import About from './routes/About';
import NoMatch from "./routes/NoMatch";
import Cart from './routes/Cart';
import Checkout from './routes/Checkout';
import MyOrder from './routes/MyOrder';

type AppProps = {
  products: ShopifyProduct[];
}

const App = ({ products }: AppProps) => {
  let windowCart = window.localStorage.getItem('cart') || '[]';
  let windowArray = JSON.parse(windowCart);

  const [cart, setCart] = useState<CartInfo[]>(windowArray);
  const [totalAmount, setTotalAmount] = useState(0);

  const updateTotal = useCallback(() => {
    let total = 0;
    cart.forEach((entry) => {
      total += Number(entry.item.variants[0].price) * entry.quantity;
    })
    setTotalAmount(total);
  }, [cart])

  useEffect(() => {
    console.log('in useEffect');
    updateTotal();
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart, updateTotal])

  const findInCart = (product: ShopifyProduct): number => {
    let found = cart.findIndex(entry => entry.item.id === product.id);
    return found;
  }

  const addToCart = (product: ShopifyProduct): void => {
    const inventory = product.variants[0].inventory_quantity;
    let copy = cart.slice();
    let found = findInCart(product);
    if (found < 0) {
      copy.push({item: product, quantity: 1})
    } else {
      if (copy[found].quantity < inventory) {
        copy[found].quantity++;
      } else {
        copy[found].quantity = inventory;
      }
    }
    setCart(copy);
  }

  const updateCart = (product: ShopifyProduct, quantity: number): void => {
    let copy = [...cart];
    let found = findInCart(product);
    let item = {...cart[found]};
    item.quantity = quantity;
    copy[found] = item;
    console.log(copy[0]);

    setCart(copy);
  }

  const removeItem = (product: ShopifyProduct): void => {
    let copy = cart.slice();
    let found = findInCart(product);
    copy.splice(found, 1);
    setCart(copy);
  }

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Routes>
        <Route index element={<Home products={products} addToCart={addToCart} />} />
        <Route path="catalog" element={<Catalog products={products} addToCart={addToCart} />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart cart={cart} updateCart={updateCart} removeItem={removeItem} totalAmount={totalAmount} />} />
        <Route path="checkout" element={<Checkout cart={cart} total={totalAmount} />} />
        <Route path="orders" element={<MyOrder />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
