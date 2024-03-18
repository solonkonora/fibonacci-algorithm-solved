function fib(n) {
 if( n == 0 || n == 1) {
    // stopping condition
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

// this block of code will output an array of the fib nums
const fibonaciSeries = [];

for (let i = 0; i <= 3; i++) {
  fibonaciSeries.push(fib(i));
}

console.log(fibonaciSeries);

// commenting the above fibonaciSeries block, console.log will output just the sum of the fib nums
// console.log(fib(3));
