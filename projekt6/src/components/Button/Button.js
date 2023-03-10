import "./Button.css";

function Button({ name, handleOnClick }) {
  return <button onClick={handleOnClick}>{name}</button>;
}

export default Button;
