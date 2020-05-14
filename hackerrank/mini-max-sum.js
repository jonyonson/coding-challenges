function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  const m = arr.length - 1;
  const min = arr.reduce((acc, cv, idx) => (idx !== m ? acc + cv : acc + 0), 0);
  const max = arr.reduce((acc, cv, idx) => (idx !== 0 ? acc + cv : acc + 0), 0);
  console.log(min + ' ' + max);
}

// https://www.hackerrank.com/challenges/mini-max-sum/problem
