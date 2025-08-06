import React from "react";
import { Text } from "../Text/index.jsx";
// export const Button = (props) => {
export const Button = ({count  , onButtonClick}) => {
  // console.log(props);
  return (
    <>
      <button onClick={onButtonClick} >click to increment</button>
      <Text count = {count} />
    </>
  );
};
