import "./Select.css";

import { useState } from "react";
function Select({ handleChange }) {
  const [selectValue, setSelectValue] = useState("USD");

  const handleSelectChange = (event) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
    handleChange(event.target.value);
  };
  return (
    <select value={selectValue} onChange={handleSelectChange}>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="CHF">CHF</option>
    </select>
  );
}

export default Select;
