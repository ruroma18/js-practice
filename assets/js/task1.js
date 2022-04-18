'use strict';

const countSum = (n) => {
  let sum = 0;
  while (n > 0) {
    sum = sum + n--;
  }
  return sum;
};

const countSum2 = (n) => {
  if (n <= 0) {
    return n;
  } else {
    return n + countSum2(n - 1);
  }
};
