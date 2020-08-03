function shuffledArray(shuffled) {
  for (let i = 0; i < shuffled.length; i++) {
    let sum = 0;
    for (let j = 0; j < shuffled.length; j++) {
      if (j !== i) sum += shuffled[j];
    }

    if (sum === shuffled[i]) {
      return shuffled.filter((_, idx) => idx !== i).sort((a, b) => a - b);
    }
  }
}
