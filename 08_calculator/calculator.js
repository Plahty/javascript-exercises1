const add = function (a, b) {
  return a + b;
};

const subtract = function (c, d) {
  return c - d;
};

const sum = function(sumArr) {
	let tSum = 0;
  for (let i = 0; i < sumArr.length; i++){
    if(typeof sumArr[i] === 'number'){
      tSum += sumArr[i];
    }
  }
  return tSum;
};

const multiply = function(multArr) {
  let tMult = 0;
  for (let i = 0; i < multArr.length; i++){
    if(typeof multArr[i] === 'number'){
      tMult *= multArr[i];
    }
  }
  return tMult;
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(num) {
	let result = 1;
  for (let i = 2; i <= num; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
