import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
export const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const { cartDispatch } = useCart();

  const onAddToCartClick = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const onRemoveFromCartClick = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product.id, // Assuming `id` uniquely identifies a product
    });
  };

  const onTitleClick = ()=>{
    navigate(`/productDetails/${product.id}`)
  }
  return (
    <div key={product.id} className="product-card">
      <div onClick={onTitleClick}>
        <p>{product.name}</p>
      </div>
      <div className="flex gap-8px">
        <p>Price - {product.newPrice} || </p>
        <p>Rating - {product.rating} || </p>
        <p>Discount - {product.discount}</p>
      </div>
      <div>
        <button onClick={onAddToCartClick}>Add To Cart</button>
        <button
          onClick={onRemoveFromCartClick}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
};
