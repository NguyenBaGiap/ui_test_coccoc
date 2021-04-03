export const currencyFormat = (currency) => {
  if (Number.isFinite(currency)) {
    const arr = currency.match(/^(\d+)((?:\.\d+)?)$/);

    // format integer part and append fraction part
    return arr[1].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + arr[2];
  } else {
    return currency;
  }
};
