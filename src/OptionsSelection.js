import React, { Component } from 'react';

import * as Constants from './Constants'
import * as OptionsSettings from './OptionsSettings'
import * as StrategyFactory from './StrategyFactory'
import * as StrategyOptionFactory from './StrategyOptionFactory'

class OptionsSelection extends Component {
  renderStrategyOptions(options) {
    return options.map((option, i) => StrategyOptionFactory.CreateStrategyOption(option, this.props.updateOption, this.props.options[option], i))
  }
  renderStrategies(strategies) {
    return strategies.map((strategy, i) => StrategyFactory.CreateStrategy(strategy, this.props.updateStrategy, this.props.strategy, i)) 
  }
  renderOptions(strategies, strategyOptions, currentStrategy) {
    return (
      <div className="options">
        <div className="strategies">
          {this.renderStrategies(strategies)}
        </div>
        <div className="strategy-options">
          {this.renderStrategyOptions(strategyOptions)}
        </div>
      </div>
    )
  }
  renderGen2Options() {
    let strategyOptions = []
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.SHINY_DITTO)
    }

    return this.renderOptions(OptionsSettings.GenStrategies.GEN_2, strategyOptions, this.props.strategy)
  }
  renderGen3Options() {
    return this.renderOptions(OptionsSettings.GenStrategies.GEN_3, [], this.props.strategy)
  }
  renderGen4Options() {
    let strategyOptions = []
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.MASUDA_METHOD)
    }

    return this.renderOptions(OptionsSettings.GenStrategies.GEN_4, strategyOptions, this.props.strategy)
  }
  renderGen5Options() {
    let strategyOptions = [Constants.StrategyOption.SHINY_CHARM]
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.MASUDA_METHOD)
    }

    return this.renderOptions(OptionsSettings.GenStrategies.GEN_5, strategyOptions, this.props.strategy)
  }
  renderGen6Options() {
    let strategyOptions = [Constants.StrategyOption.SHINY_CHARM]
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategyOptions.push(Constants.StrategyOption.MASUDA_METHOD)
    } else if (this.props.strategy === Constants.Strategy.WILD_ENCOUNTER) {
      strategyOptions.push(Constants.StrategyOption.HORDE_ENCOUNTER)
    }

    return this.renderOptions(OptionsSettings.GenStrategies.GEN_6, strategyOptions, this.props.strategy)
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
