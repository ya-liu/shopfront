import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Cart from "./routes/Cart";
import NoMatch from "./components/NoMatch";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
