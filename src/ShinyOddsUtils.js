
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

function gen5GetShinyChance_Base() {
  return 1/8192
}

function gen5GetShinyCharmBoost(shinyCharmEnabled) {
  return shinyCharmEnabled ? 2/8192 : 0
}

function gen5GetMasudaMethodBoost(masudaMethodEnabled) {
  return masudaMethodEnabled ? 5/8192 : 0
}

function gen5GetShinyChance_WildEncounter({shinyCharm}) {
  return gen5GetShinyChance_Base() + gen5GetShinyCharmBoost(shinyCharm)
}

function gen5GetShinyChance_Breeding({shinyCharm, masudaMethod}) {
  return gen5GetShinyChance_Base() + gen5GetShinyCharmBoost(shinyCharm) + gen5GetMasudaMethodBoost(masudaMethod)
}

function gen5GetShinyChance(strategy, options) {
  switch (strategy) {
    case Constants.Strategy.WILD_ENCOUNTER:
      return gen5GetShinyChance_WildEncounter(options)
    case Constants.Strategy.BREEDING:
      return gen5GetShinyChance_Breeding(options)
    default:
      return 0
  }
}

function gen6GetShinyChance_Base() {
  return 1/4096
}

function gen6GetShinyCharmBoost(shinyCharmEnabled) {
  return shinyCharmEnabled ? 2/4096 : 0
}

function gen6GetMasudaMethodBoost(masudaMethodEnabled) {
  return masudaMethodEnabled ? 5/4096 : 0
}

function gen6GetShinyChance_WildEncounter({shinyCharm}) {
  return gen6GetShinyChance_Base() + gen6GetShinyCharmBoost(shinyCharm)
}

function gen6GetShinyChance_Breeding({shinyCharm, masudaMethod}) {
  return gen6GetShinyChance_Base() + gen6GetShinyCharmBoost(shinyCharm) + gen6GetMasudaMethodBoost(masudaMethod)
}

function gen6GetShinyChance_PokeRadar(streak) {
  return streak >= 40 ? 1/50 : 4 * (Math.ceil(65535 / (8200 - 200 * (streak / 2 + 20))) / 65536)
}

function gen6GetShinyChance_ChainFishing(streak, {shinyCharm}) {
  // http://mrnbayoh.github.io/pkmn6gen/chain_fishing_shiny/
  let n = 1 + (shinyCharm ? 2 : 0) + (Math.min(streak, 20) * 2)
  return 1 - (Math.pow(1 - gen6GetShinyChance_Base(), n))
}

function gen6GetShinyChance(strategy, options, streak) {
  switch (strategy) {
    case Constants.Strategy.WILD_ENCOUNTER:
      return gen6GetShinyChance_WildEncounter(options)
    case Constants.Strategy.BREEDING:
      return gen6GetShinyChance_Breeding(options)
    case Constants.Strategy.POKE_RADAR:
      return gen6GetShinyChance_PokeRadar(streak)
    case Constants.Strategy.CHAIN_FISHING:
      return gen6GetShinyChance_ChainFishing(streak, options)
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
    case Constants.Generation.GEN_5:
      return gen5GetShinyChance(strategy, options)
    case Constants.Generation.GEN_6:
      return gen6GetShinyChance(strategy, options, streak)
    default:
      return 0
  }
}

export function getCumulativeShinyChance(generation, strategy, options, streak) {
  let variableChance = false
  let chanceFunc = (n) => 0
  if (strategy === Constants.Strategy.POKE_RADAR) {
    if (generation === Constants.Generation.GEN_4) {
      chanceFunc = gen4GetShinyChance_PokeRadar
      variableChance = true
    } else if (generation === Constants.Generation.GEN_6) {
      chanceFunc = gen6GetShinyChance_PokeRadar
      variableChance = true
    }
  } else if (strategy === Constants.Strategy.CHAIN_FISHING) {
    if (generation === Constants.Generation.GEN_6) {
      chanceFunc = (n) => gen6GetShinyChance_ChainFishing(n, options)
      variableChance = true
    }
  }

  if (variableChance) {
    if (streak > 2500) return 1

    let chanceNot = 1
    for (let i = streak; i > 0; i--) {
      chanceNot *= (1 - chanceFunc(i))
    }

    return 1 - chanceNot
  } else {
    return 1 - Math.pow(1 - getShinyChance(generation, strategy, options), streak)
  }
}
