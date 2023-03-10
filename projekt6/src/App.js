import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import fetchCurrience from "./services/fetchCurrience";
import Select from "./components/Select/Select";
import { useState } from "react";
import Input from "./components/Input/Input";

function App() {
  const [selectValue, setSelectValue] = useState("USD");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState();

  function onClick() {
    fetchCurrience({ value: selectValue })
      .then((response) => response.json())
      .then((data) => {
        setResult(inputValue * data?.rates[0]?.mid);
      });
  }
  function onSelectChange(value) {
    setSelectValue(value);
  }
  function onInputChange(value) {
    setInputValue(value);
  }
  return (
    <div>
      <h1>Przelicznik walut</h1>
      <label>
        <Text text="Wybierz posiadaną walutę: " />
        <Select handleChange={onSelectChange} />
        <Text text="Ile przeliczamy:" />
        <Input handleChange={onInputChange} />
        <Button name="Przelicz" handleOnClick={onClick} />
        <Text text={"Wychodzi: " + (result ?? "")} />
      </label>
    </div>
  );
}

export default App;
