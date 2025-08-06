import { products } from "../../db/products.jsx";

import "../../App.css";
import { Navbar } from "../../components/NavBar.jsx/index.jsx";
import { ProductCard } from "../../components/ProductCard/index.jsx";
export const Products = () => {
  return (
    <>
      <div className="App">
        <Navbar />
        <h1>Products</h1>
        <div className="product-list">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};
