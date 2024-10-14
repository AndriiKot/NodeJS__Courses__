"use strict";

const CC = require("currency-converter-lt");
let currencyConverter = new CC({ from: "EUR", to: "UAH", amount: 100 });

currencyConverter.convert().then((response) => {
  console.log(response); 
});
