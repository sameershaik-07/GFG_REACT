import { useState } from 'react'


const allBrands = [
                {id: "1", brandName: "puma"},
                {id: "2", brandName: "adiddas"},
                {id: "3", brandName: "nike"},
                {id: "4", brandName: "fila" },
                {id: "5", brandName: "reebok"}
  ];
function BrandList() {
  // const [search, setSearch] = useState();
  const[brands, setBrands] = useState(allBrands); 
  const onSearchChange = (event) => {
    // setSearch(event.target.value);
    const value = event.target.value;
    const filteredBrands = value?.length > 0
      ? allBrands.filter((brand) =>
          brand.brandName.toLowerCase().includes(value.toLowerCase())
        )
      : allBrands;
    setBrands(filteredBrands);
  };
  
  return (
    <>
      <h1>Brand List</h1>
      <input type="text"onChange={onSearchChange} placeholder='search a brand' />
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>
            {brand.brandName}
          </li>
        ))}
      </ul>
      
    </>
  );

}
export default BrandList;
