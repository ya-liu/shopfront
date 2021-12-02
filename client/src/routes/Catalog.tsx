import { ShopifyProduct } from "../interfaces";
import ProductList from '../components/ProductList';

type ProductListProps = {
  products: ShopifyProduct[];
  addToCart: (product: ShopifyProduct) => void;
}

export default function Catalog({ products, addToCart }: ProductListProps) {
  return (
    <>
      <main>
        <h2>All products at espresso all day:</h2>
        <ProductList products={products} query='' addToCart={addToCart}/>
      </main>
    </>
  );
}