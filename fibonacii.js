// fibonacii series upto a limit or number at an index using memoization

const fiboIndex = (n, memo = {}) => {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];
  memo[n] = fiboIndex(n - 1) + fiboIndex(n - 2);
  return memo[n];
};

const fiboLimit = (n, memo = {}) => {
  let fib = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return fib;

  for (let i = 2; i <= n; i++) {
    fib = [...fib, fib[i - 1] + fib[i - 2]];
  }

  return fib;
};

console.log("fiboIndex : ", fiboIndex(8));
console.log("fiboLimit : ", fiboLimit(8));
