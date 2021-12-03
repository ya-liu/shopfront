import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://espresso-all-day.myshopify.com/">
          espresso all day
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}

export default Footer;
