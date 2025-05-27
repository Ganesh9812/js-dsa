//factorial iteratively

function factorialIterative(n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

function factorialRecursive(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}
