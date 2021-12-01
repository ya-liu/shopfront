import { Routes, Route } from "react-router-dom";
import './App.css';
import { ShopifyProduct } from "./interfaces";
import Home from "./routes/Home";
import Header from './components/Header';
import Catalog from "./routes/Catalog";
import About from './routes/About';
import Cart from "./routes/Cart";
import NoMatch from "./components/NoMatch";

type ProductListProps = {
  products: ShopifyProduct[];
}

const App = ({ products }: ProductListProps) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route path="catalog" element={<Catalog products={products} />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
