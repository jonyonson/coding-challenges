/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function (N, trust) {
//   let o = {};

//   for (let i = 0; i < trust.length; i++) {
//     if (o[trust[i][0]] !== undefined) o[trust[i][0]].push(trust[i][1]);
//     else o[trust[i][0]] = [trust[i][1]];
//   }

//   let trusts_no_one = [];
//   for (let i = 1; i <= N; i++) {
//     if (o[i] === undefined) {
//       trusts_no_one.push(i);
//     }
//   }

//   if (trusts_no_one.length > 1) return -1;
//   let possible_judge = trusts_no_one[0];

//   for (let i = 1; i <= N; i++) {
//     if (i === possible_judge) continue;
//     if (!o[i].includes(possible_judge)) return -1;
//   }

//   return possible_judge;
// };

var findJudge = function (N, trust) {
  let count = Array(N + 1).fill(0);

  trust.forEach((t) => {
    count[t[0]]--;
    count[t[1]]++;
  });

  for (let i = 1; i <= N; i++) {
    if (count[i] === N - 1) return i;
  }

  return -1;
};
