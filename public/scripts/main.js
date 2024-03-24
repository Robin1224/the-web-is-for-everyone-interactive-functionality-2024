const numberWithPeriods = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  const priceValue = price.innerHTML.toString().replace("€", "");
  price.innerHTML = `€${numberWithPeriods(priceValue)}`;

});
