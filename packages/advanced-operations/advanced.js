const multiply = require('@testing-lerna/basics-operations').multiply;

function factorial(a) {  
  if (a === 1) return 1;
  return multiply (a, factorial(a -1));
}

exports.factorial = factorial;