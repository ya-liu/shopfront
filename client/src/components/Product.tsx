import { ShopifyProduct } from '../interfaces';

type ProductProps = {
  product: ShopifyProduct;
}

const Product = ({ product }: ProductProps): JSX.Element => {
  return (
    <div className="card">
      {product.image && <img src={product.image.src} alt="product" style={{ width: "300px", height: "200px" }} />}
      <br />
      {product.title}
      <br />
      Price: ${product.variants[0].price}
    </div>
  );
};

export default Product;