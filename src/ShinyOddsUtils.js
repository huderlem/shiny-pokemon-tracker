export function getShinyChance() {
  return 1/8192
}

export function getCumulativeShinyChance(streak) {
  return 1 - Math.pow(1 - getShinyChance(), streak)
}
