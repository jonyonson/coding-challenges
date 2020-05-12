function marcsCakewalk(calorie) {
  calorie.sort((a, b) => b - a);
  let j = 0;
  let sum = 0;
  for (let i = 0; i < calorie.length; i++) {
    sum += 2 ** j * calorie[i];
    j++;
  }

  return sum;
}

// https://www.hackerrank.com/challenges/marcs-cakewalk/problem
