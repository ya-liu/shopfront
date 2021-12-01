import { dummyProduct } from '../interfaces';

type ProductEntryProps = {
  product: dummyProduct;
}

const ProductEntry= ({ product }: ProductEntryProps): JSX.Element => {
  return (
    <li className="card">
      {product.name}
    </li>
  )
}

export default ProductEntry;