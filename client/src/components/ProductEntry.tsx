import { Product } from '../interfaces';

type ProductEntryProps = {
  product: Product;
}

const ProductEntry= ({ product }: ProductEntryProps) => {
  return (
    <li className="card">
      {product.name}
    </li>
  )
}

export default ProductEntry;