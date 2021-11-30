import { product } from '../interfaces';

interface ProductEntryProps {
  product: product;
}

const ProductEntry= ({ product }: ProductEntryProps) => {
  return (
    <li className="card">
      {product.name}
    </li>
  )
}

export default ProductEntry;