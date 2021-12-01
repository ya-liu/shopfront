import { ShopifyProduct } from '../interfaces';

type ProductEntryProps = {
  product: ShopifyProduct;
}

const ProductEntry= ({ product }: ProductEntryProps): JSX.Element => {
  return (
    <li className="card">
      {product.title}
      <br />
      {product.body_html}
    </li>
  )
}

export default ProductEntry;