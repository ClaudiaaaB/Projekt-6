const formElement = document.querySelector(".form-form");
const currencyOwnedElement = document.querySelector(".js-currencyOwned");
const moneyOwnedElement = document.querySelector(".js-moneyOwned");
const symbolElement = document.querySelector(".js-symbol");
const exchangedAmountElement = document.querySelector(".js-exchangedAmount");
const toShowResult = document.querySelector(".final-result");

const getButton = document.getElementById("get-button");
getButton.addEventListener("click", () => {
  console.log(currencyOwnedElement.value);
  fetch(
    "https://api.nbp.pl/api/exchangerates/rates/A/" +
      currencyOwnedElement.value +
      "/"
  )
    .then((response) => response.json())
    .then((data) => {
      calculateRates(data);
    });
});
const calculateRates = (data) => {
  if (moneyOwnedElement.value < 0) {
    alert("wartośc powinna być większa od 0");
  }
  exchangedAmountElement.innerText = (
    data.rates[0].mid * moneyOwnedElement.value
  ).toFixed(2);
};
