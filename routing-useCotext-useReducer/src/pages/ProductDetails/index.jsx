import { useParams } from "react-router-dom";
import { products } from "../../db/products";

export const ProductDetails = () => {
  const { productsId } = useParams();
  const selectedProduct = products.find(
    (product) => product.id === Number(productsId)
  );

  if (!selectedProduct) {
    return <h1>Product not found!</h1>;
  }

  const { name, newprice, discount, rating } = selectedProduct;

  return (
    <>
      <h1>Product Details</h1>
      <div>
        <h2>{name}</h2>
        <p>Price: ₹{newprice}</p>
        <p>Discount: {discount}%</p>
        <p>Rating: ⭐ {rating}</p>
      </div>
    </>
  );
};
