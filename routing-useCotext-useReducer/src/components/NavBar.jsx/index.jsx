import { useCart } from "../../context/cart-context";

export const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav
      style={{
        border: "1px solid black",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Nav</h1>
      <div>Cart: {cart.length}</div>
    </nav>
  );
};
