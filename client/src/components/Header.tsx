import { Link } from "react-router-dom";

const Header = () => (
  <>
    <header className="App-header">
      espresso all day
    </header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/about">About Us</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </>
)

export default Header;
