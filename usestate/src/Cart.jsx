import React from 'react'


// import { useState } from 'react'


const allBrands = [
                {id: "1", brandName: "puma"},
                {id: "2", brandName: "adiddas"},
                {id: "3", brandName: "nike"},
                {id: "4", brandName: "fila" },
                {id: "5", brandName: "reebok"}
  ];

  
export const Cart = () => {

  return (
    <>
      <div>
        {
          allBrands.map((brand) => (
            <div key={brand.id} className="brand">
              <span>{brand.brandName}</span>
              <button>Add to cart</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
