import { Product } from '../interfaces';

type ProductEntryProps = {
  product: Product;
}

const ProductEntry= ({ product }: ProductEntryProps): JSX.Element => {
  return (
    <li className="card">
      {product.name}
    </li>
  )
}

export default ProductEntry;