function fetchCurrience(currencyOwnedElement) {
  return fetch(
    "https://api.nbp.pl/api/exchangerates/rates/A/" +
      currencyOwnedElement.value +
      "/"
  );
}

export default fetchCurrience;
