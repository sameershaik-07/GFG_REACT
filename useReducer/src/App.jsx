import { filterReducer } from "./reducer/filterReducer";
import { useReducer } from "react";
import { useState } from "react";
import { products } from "./db/products";
// import { useSate} from "react";
// import { Count } from "./Count";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // const [count, setCount] = useState(0);
  const intialState = {
    price: "",
    discount: "",
    rating: "",
  };
  // const [ filter, filterDispatch] = useReducer(filterReducer, intialState);
  const [{ price, discount, rating }, filterDispatch] = useReducer(
    filterReducer,
    intialState
  );

  // const filterByPrice =
  //   price > 0 && products.filter(({ newprice }) => newprice <= price);

  // const filterByDiscount =
  //   discount > 0
  //     ? filterByPrice.filter(({ product }) => product.discount > discount)
  //     : filterByPrice;

  // const filterByRating =
  //   rating > 0
  //     ? filterByDiscount.filter(({ product }) => product.rating > discount)
  //     : filterByDiscount;

  // chatgpt
  const filterByPrice =
    price > 0 ? products.filter(({ newprice }) => newprice <= price) : products;

  const filterByDiscount =
    discount > 0
      ? filterByPrice.filter((product) => product.discount > discount)
      : filterByPrice;

  const filterByRating =
    rating > 0
      ? filterByDiscount.filter((product) => product.rating > rating)
      : filterByDiscount;

  const handlePriceChange = (e) => {
    filterDispatch({
      type: "PRICE",
      payload: e.target.value,
    });
  };

  const handleDiscountChange = (e) => {
    filterDispatch({
      type: "DISCOUNT",
      payload: e.target.value,
    });
  };

  const handleRatingChange = (e) => {
    filterDispatch({
      type: "RATING",
      payload: e.target.value,
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {/* <h1>Products</h1>
      <div>
        <span>Fileters</span>
        <input
          value={price}
          type="text"
          placeholder="set price limit"
          onChange={handlePriceChange}
        />
        <input
          value={discount}
          type="text"
          placeholder="set discount "
          onChange={handleDiscountChange}
        />
        <input
          type="text"
          value={rating}
          placeholder="set rating "
          onChange={handleRatingChange}
        />
      </div> */}

      <h1>Products</h1>
      <div className="cart-count">
        <p>🛒 Cart Items: {cart.length}</p>
      </div>

      <div className="filter-bar">
        <input
          value={price}
          type="number"
          placeholder="Set price limit"
          onChange={handlePriceChange}
        />
        <input
          value={discount}
          type="number"
          placeholder="Min discount %"
          onChange={handleDiscountChange}
        />
        <input
          type="number"
          value={rating}
          placeholder="Min rating"
          onChange={handleRatingChange}
        />
      </div>

      <div className="product-list">
        {filterByRating?.length > 0 ? (
          filterByRating.map((product, index) => (
            <div className="product-card" key={index}>
              <h3>{product.name}</h3>
              <p>
                <strong>Price:</strong> ₹{product.newprice}
              </p>
              <p>
                <strong>Discount:</strong> {product.discount}%
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {product.rating}
              </p>
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products match the filter criteria.</p>
        )}
      </div>

      <div>
        {/* {filterByDiscount?.length > 0 &&
          filterProducts.map((produc  t) => (
            <div>
              <div>
                <p>{product.name}</p>
              </div>
              <div>
                <p>price - {product.newprice}</p>
                <p>discount - {product.discount}</p>
                <p>rating- {product.rating}</p>
              </div>
            </div>
          ))} */}
        chatgpt
        {/* {filterByRating?.length > 0 &&
          filterByRating.map((product, index) => (
            <div key={index}>
              <div>
                <p>{product.name}</p>
              </div>
              <div>
                <p>price - {product.newprice}</p>
                <p>discount - {product.discount}</p>
                <p>rating - {product.rating}</p>
              </div>
            </div>
          ))} */}
      </div>
      {/* <Count /> */}
    </>
  );
}

export default App;
