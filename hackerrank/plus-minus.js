function plusMinus(arr) {
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positives++;
    else if (arr[i] < 0) negatives++;
    else zeros++;
  }

  console.log((positives / arr.length).toFixed(6));
  console.log((negatives / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

// https://www.hackerrank.com/challenges/plus-minus/problem
