
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

function gen4GetShinyChance_Base() {
  return 1/8192
}

function gen4GetShinyChance_MasudaMethod() {
  return 5/8192
}

function gen4GetShinyChance_Breeding({masudaMethod}) {
  return masudaMethod ? gen4GetShinyChance_MasudaMethod() : gen4GetShinyChance_Base()
}

function gen4GetShinyChance_PokeRadar(streak) {
  // http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9_Radar#Shiny_probability
  return streak >= 40 ? 1/50 : 4 * (Math.ceil(65535 / (8200 - streak * 200)) / 65536)
}

function gen4GetShinyChance(strategy, options, streak) {
  switch (strategy) {
    case Constants.Strategy.WILD_ENCOUNTER:
      return gen4GetShinyChance_Base()
    case Constants.Strategy.BREEDING:
      return gen4GetShinyChance_Breeding(options)
    case Constants.Strategy.POKE_RADAR:
      return gen4GetShinyChance_PokeRadar(streak)
    default:
      return 0
  }
}

export function getShinyChance(generation, strategy, options, streak) {
  switch (generation) {
    case Constants.Generation.GEN_2:
      return gen2GetShinyChance(strategy, options)
    case Constants.Generation.GEN_3:
      return gen3GetShinyChance()
    case Constants.Generation.GEN_4:
      return gen4GetShinyChance(strategy, options, streak)
    default:
      return 0
  }
}

export function getCumulativeShinyChance(generation, strategy, options, streak) {
  if (generation === Constants.Generation.GEN_4 && strategy === Constants.Strategy.POKE_RADAR) {
    if (streak > 2500) return 1

    let chanceNot = 1
    for (let i = streak; i > 0; i--) {
      chanceNot *= (1 - gen4GetShinyChance_PokeRadar(i))
    }

    return 1 - chanceNot
  }

  return 1 - Math.pow(1 - getShinyChance(generation, strategy, options), streak)
}
