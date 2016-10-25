
import * as Constants from './Constants'

function gen2GetShinyChance_Base() {
  return 1/8192
}

function gen2GetShinyChance_ShinyDitto() {
  return 1/64
}

function gen2GetShinyChance_Breeding({shinyDitto}) {
  return shinyDitto ? gen2GetShinyChance_ShinyDitto() : gen2GetShinyChance_Base()
}

function gen2GetShinyChance(strategy, options) {
  switch (strategy) {
    case Constants.Strategy.WILD_ENCOUNTER:
      return gen2GetShinyChance_Base()
    case Constants.Strategy.BREEDING:
      return gen2GetShinyChance_Breeding(options)
    default:
      return 0
  }
}

function gen3GetShinyChance() {
  return 1/8192
}

export function getShinyChance(generation, strategy, options) {
  switch (generation) {
    case Constants.Generation.GEN_2:
      return gen2GetShinyChance(strategy, options)
    case Constants.Generation.GEN_3:
      return gen3GetShinyChance()
    default:
      return 0
  }
}

export function getCumulativeShinyChance(generation, strategy, options, streak) {
  return 1 - Math.pow(1 - getShinyChance(generation, strategy, options), streak)
}
