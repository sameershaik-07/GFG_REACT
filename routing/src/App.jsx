// import { useState } from 'react'
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Cart } from "./pages/Cart";
import { NavLink, Link, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./component/PrivateRoute";

function App() {
  // const [count, setCount] = useState(0)
  const getStyles = (isActive) => {
    color: isActive ? "red" : "";
  };
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About</Link> */}
      <NavLink to="/" style={getStyles}>
        Home
      </NavLink>{" "}
      ||
      <NavLink to="/cart" style={getStyles}>
        Cart
      </NavLink>{" "}
      ||
      <NavLink to="/about" style={getStyles}>
        About
      </NavLink>{" "}
      ||
      <NavLink to="/login" style={getStyles}>
        Login
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
