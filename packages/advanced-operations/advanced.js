const basicOperations = require('@testing-lerna/basics-operations');

function factorial(a) {  
  if (a === 1) return 1;
  return basicOperations.multiply (a, factorial(a -1));
}

function summation(value, times) {
  let result = value;

  for (let i = 0; i < times; ++i) {
    result = basicOperations.add(result, value);
  }
  
  return result;
}

exports.factorial = factorial;
exports.summation = summation;