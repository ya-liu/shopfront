import { ShopifyProduct } from "../interfaces";
import ProductList from '../components/ProductList';

type ProductListProps = {
  products: ShopifyProduct[];
}

export default function Catalog({ products }: ProductListProps) {
  return (
    <>
      <main>
        <h2>All products at espresso all day:</h2>
        <ProductList products={products} />
      </main>
    </>
  );
}