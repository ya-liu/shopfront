import { ShopifyProduct } from "../interfaces";
import ProductList from '../components/ProductList';

type ProductListProps = {
  products: ShopifyProduct[];
  updateCart: (product: ShopifyProduct) => void;
}

export default function Catalog({ products, updateCart }: ProductListProps) {
  return (
    <>
      <main>
        <h2>All products at espresso all day:</h2>
        <ProductList products={products} query='' updateCart={updateCart}/>
      </main>
    </>
  );
}