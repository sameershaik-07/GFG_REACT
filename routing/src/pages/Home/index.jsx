import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const goToCartClick = () => {
    navigate('/cart');
  };
  return (
    <>
      <h1>This is Home page</h1>
      <button onClick={goToCartClick}>go to cart</button>
    </>
  );
};
