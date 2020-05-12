function twoArrays(k, A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let j = A.length - 1;
  let does_permute = true;
  for (let i = 0; i < A.length; i++) {
    if (A[i] + B[j] < k) does_permute = false;
    j--;
  }

  return does_permute ? 'YES' : 'NO';
}

// https://www.hackerrank.com/challenges/two-arrays
