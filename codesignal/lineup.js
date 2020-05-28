function lineUp(commands) {
  let result = 0;
  let same = true;
  for (var i = 0; i < commands.length; i++) {
    var command = commands[i];
    if (command == 'L' || command == 'R') {
      same = !same;
    }
    if (same) result++;
  }
  return result;
}
