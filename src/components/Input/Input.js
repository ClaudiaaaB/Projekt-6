import { useState } from "react";

function Input({ handleChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleChange(event.target.value);
  };
  return <input value={inputValue} onChange={handleInputChange}></input>;
}

export default Input;
