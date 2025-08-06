import React from "react";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "PRICE":
      return {
        ...state,
        price: action.payload,
      };

    // different casess.......
    default:
      return state;

    case "DISCOUNT":
      return {
        ...state,
        discount: action.payload,
      };

    case "RATING":
      return {
        ...state,
        rating: action.payload,
      };
  }
};
