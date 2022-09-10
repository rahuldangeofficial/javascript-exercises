const ftoc = function(fahrenheit) {
  let celsius = ((fahrenheit-32)*5)/9;
  return Math.round(celsius * 10) / 10;
};

const ctof = function(celsius) {
  let fahrenheit =( (celsius*9)/5)+32;
  return Math.round(fahrenheit* 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
