const basicsOperations = require('@testing-lerna/basics-operations');
const advancedOperations = require('@testing-lerna/advanced-operations');
const showValue = require('@testing-lerna/common');

function factorial2x(value) {
  const double = basicsOperations.multiply(value, 2);
  return advancedOperations.factorial(double);
}

showValue(factorial2x(10));
showValue(advancedOperations.summation(10, 30));
