import React from "react";

import { useState } from "react";

const allBrands = [
  { id: "1", brandName: "puma" },
  { id: "2", brandName: "adiddas" },
  { id: "3", brandName: "nike" },
  { id: "4", brandName: "fila" },
  { id: "5", brandName: "reebok" },
];

export const Cart = () => {
  const [selectedBrand, setSelectedBrand] = useState([]);
  const onAddToCartClick = (id) => {
    // console.log("clicks" , id)
    const selectedItem = allBrands.find((item) => item.id === id);
    setSelectedBrand([...selectedBrand, selectedItem]);
  };

  const onRemoveClick = (id) => {
    const filleterdItems = selectedBrand.filter((item) => item.id !== id);
    setSelectedBrand(filleterdItems);
  };
  return (
    <>
      <div>
        {allBrands.map((brand) => (
          <div key={brand.id} >
            <span>{brand.brandName}</span>
            <button onClick={() => onAddToCartClick(brand.id)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <p>Your Cart</p>
        {selectedBrand.map((brand) => (
          <div key={brand.id}>
            <p>{brand.brandName}</p>
            <button onClick={() => onRemoveClick(brand.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};
