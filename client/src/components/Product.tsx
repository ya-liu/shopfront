import { ShopifyProduct } from '../interfaces';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type ProductProps = {
  product: ShopifyProduct;
}

const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <>
      <CardMedia
        component="img"
        height="150"
        image={product.image.src}
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: {`$${product.variants[0].price}`}
        </Typography>
      </CardContent>
    </>
  );
};

export default Product;

// {product.image && <img src={product.image.src} alt="product" style={{ width: "300px", height: "200px" }} />}