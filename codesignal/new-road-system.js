function newRoadSystem(roadRegister) {
  for (let i = 0; i < roadRegister.length; i++) {
    const from = roadRegister[i].filter((v) => v).length;
    const to = roadRegister.map((row) => row[i]).filter((v) => v).length;
    if (from != to) return false;
  }
  return true;
}
