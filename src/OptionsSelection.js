import React, { Component } from 'react';

import * as Constants from './Constants'
import * as StrategyFactory from './StrategyFactory'
import * as StrategyOptionFactory from './StrategyOptionFactory'

class OptionsSelection extends Component {
  renderStrategyOptions(options) {
    return options.map((option, i) => StrategyOptionFactory.CreateStrategyOption(option, this.props.updateOption, this.props.options[option], i))
  }
  renderStrategies(strategies) {
    return strategies.map((strategy, i) => StrategyFactory.CreateStrategy(strategy, this.props.updateStrategy, this.props.strategy, i)) 
  }
  renderGen2Options() {
    let strategies = [
      Constants.Strategy.WILD_ENCOUNTER,
      Constants.Strategy.BREEDING,
    ]
    let strategyOptions = []
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.SHINY_DITTO)
    }

    return (
      <div>
        {this.renderStrategies(strategies)}
        {this.renderStrategyOptions(strategyOptions)}
      </div>
    )
  }
  renderGen3Options() {
    let strategies = [
      Constants.Strategy.WILD_ENCOUNTER,
      Constants.Strategy.BREEDING,
    ]

    return (
      <div>
        {this.renderStrategies(strategies)}
      </div>
    )
  }
  renderGen4Options() {
    let strategies = [
      Constants.Strategy.WILD_ENCOUNTER,
      Constants.Strategy.BREEDING,
      Constants.Strategy.POKE_RADAR,
    ]
    let strategyOptions = []
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.MASUDA_METHOD)
    }

    return (
      <div>
        {this.renderStrategies(strategies)}
        {this.renderStrategyOptions(strategyOptions)}
      </div>
    )
  }
  renderGen5Options() {
    let strategies = [
      Constants.Strategy.WILD_ENCOUNTER,
      Constants.Strategy.BREEDING,
    ]
    let strategyOptions = [Constants.StrategyOption.SHINY_CHARM]
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.MASUDA_METHOD)
    }

    return (
      <div>
        {this.renderStrategies(strategies)}
        {this.renderStrategyOptions(strategyOptions)}
      </div>
    )
  }
  renderGen6Options() {
    let strategies = [
      Constants.Strategy.WILD_ENCOUNTER,
      Constants.Strategy.BREEDING,
      Constants.Strategy.POKE_RADAR,
      Constants.Strategy.CHAIN_FISHING,
      Constants.Strategy.FRIEND_SAFARI,
    ]
    let strategyOptions = [Constants.StrategyOption.SHINY_CHARM]
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.MASUDA_METHOD)
    } else if (this.props.strategy === Constants.Strategy.WILD_ENCOUNTER) {
      strategyOptions.push(Constants.StrategyOption.HORDE_ENCOUNTER)
    }

    return (
      <div>
        {this.renderStrategies(strategies)}
        {this.renderStrategyOptions(strategyOptions)}
      </div>
    )
  }
  render() {
    switch (this.props.generation) {
      case Constants.Generation.GEN_2:
        return this.renderGen2Options(this.props)
      case Constants.Generation.GEN_3:
        return this.renderGen3Options(this.props)
      case Constants.Generation.GEN_4:
        return this.renderGen4Options(this.props)
      case Constants.Generation.GEN_5:
        return this.renderGen5Options(this.props)
      case Constants.Generation.GEN_6:
        return this.renderGen6Options(this.props)
      default:
        return null
    }
  }
}

export default OptionsSelection;
