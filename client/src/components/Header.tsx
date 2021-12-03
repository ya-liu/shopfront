import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

const Header = () => (
  <>
    <header className="App-header">
      <Typography variant="h3" gutterBottom>
        espresso all day
      </Typography>
    </header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  </>
)

export default Header;
