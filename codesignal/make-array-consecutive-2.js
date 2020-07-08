function makeArrayConsecutive2(statues) {
  let min = Math.min(...statues);
  let max = Math.max(...statues);

  return max - min - statues.length + 1;
}
