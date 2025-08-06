import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart-reducer";
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const intialState = {
    cart: [],
  };
  const [{ cart }, cartDispatch] = useReducer(cartReducer, intialState);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartProvider);
};

export {useCart  , CartProvider}