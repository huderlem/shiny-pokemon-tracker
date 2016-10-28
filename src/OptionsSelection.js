import React, { Component } from 'react';

import * as Constants from './Constants'

class OptionsSelection extends Component {
  renderGen2Options() {
    let options
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      options = (
        <div>
          <input
            onChange={() => {
              const nextChecked = !this.props.options.shinyDitto
              this.props.updateOption("shinyDitto", nextChecked)
            }}
            type="checkbox"
            name="shiny-ditto-picker"
            checked={this.props.options.shinyDitto} />
            Shiny Ditto
          <br />
        </div>
      )
    }

    return (
      <div>
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.WILD_ENCOUNTER)}
          type="radio"
          name="strategy-picker"
          value="Wild Encounter"
          checked={this.props.strategy === Constants.Strategy.WILD_ENCOUNTER} />
          Wild Encounter
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.BREEDING)}
          type="radio"
          name="strategy-picker"
          value="Breeding"
          checked={this.props.strategy === Constants.Strategy.BREEDING} />
          Breeding
        <br />
        {options}
      </div>
    )
  }
  renderGen3Options() {
    return (
      <div>
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.WILD_ENCOUNTER)}
          type="radio"
          name="strategy-picker"
          value="Wild Encounter"
          checked={this.props.strategy === Constants.Strategy.WILD_ENCOUNTER} />
          Wild Encounter
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.BREEDING)}
          type="radio"
          name="strategy-picker"
          value="Breeding"
          checked={this.props.strategy === Constants.Strategy.BREEDING} />
          Breeding
        <br />
      </div>
    )
  }
  renderGen4Options() {
    let options
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      options = (
        <div>
          <input
            onChange={() => {
              const nextChecked = !this.props.options.masudaMethod
              this.props.updateOption("masudaMethod", nextChecked)
            }}
            type="checkbox"
            name="masuda-method-picker"
            checked={this.props.options.masudaMethod} />
            Masuda Method
          <br />
        </div>
      )
    }

    return (
      <div>
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.WILD_ENCOUNTER)}
          type="radio"
          name="strategy-picker"
          value="Wild Encounter"
          checked={this.props.strategy === Constants.Strategy.WILD_ENCOUNTER} />
          Wild Encounter
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.BREEDING)}
          type="radio"
          name="strategy-picker"
          value="Breeding"
          checked={this.props.strategy === Constants.Strategy.BREEDING} />
          Breeding
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.POKE_RADAR)}
          type="radio"
          name="strategy-picker"
          value="Poké Radar"
          checked={this.props.strategy === Constants.Strategy.POKE_RADAR} />
          Poké Radar
        <br />
        {options}
      </div>
    )
  }
  renderGen5Options() {
    let options = (
      <div>
        <input
          onChange={() => {
            const nextChecked = !this.props.options.shinyCharm
            this.props.updateOption("shinyCharm", nextChecked)
          }}
          type="checkbox"
          name="shiny-charm-picker"
          checked={this.props.options.shinyCharm} />
          Shiny Charm
        <br />
      </div>
    )
    let strategySpecificOptions
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategySpecificOptions = (
        <div>
          <input
            onChange={() => {
              const nextChecked = !this.props.options.masudaMethod
              this.props.updateOption("masudaMethod", nextChecked)
            }}
            type="checkbox"
            name="masuda-method-picker"
            checked={this.props.options.masudaMethod} />
            Masuda Method
          <br />
        </div>
      )
    }

    return (
      <div>
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.WILD_ENCOUNTER)}
          type="radio"
          name="strategy-picker"
          value="Wild Encounter"
          checked={this.props.strategy === Constants.Strategy.WILD_ENCOUNTER} />
          Wild Encounter
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.BREEDING)}
          type="radio"
          name="strategy-picker"
          value="Breeding"
          checked={this.props.strategy === Constants.Strategy.BREEDING} />
          Breeding
        <br />
        {options}
        {strategySpecificOptions}
      </div>
    )
  }
  renderGen6Options() {
    let options = (
      <div>
        <input
          onChange={() => {
            const nextChecked = !this.props.options.shinyCharm
            this.props.updateOption("shinyCharm", nextChecked)
          }}
          type="checkbox"
          name="shiny-charm-picker"
          checked={this.props.options.shinyCharm} />
          Shiny Charm
        <br />
      </div>
    )
    let strategySpecificOptions
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      strategySpecificOptions = (
        <div>
          <input
            onChange={() => {
              const nextChecked = !this.props.options.masudaMethod
              this.props.updateOption("masudaMethod", nextChecked)
            }}
            type="checkbox"
            name="masuda-method-picker"
            checked={this.props.options.masudaMethod} />
            Masuda Method
          <br />
        </div>
      )
    }

    return (
      <div>
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.WILD_ENCOUNTER)}
          type="radio"
          name="strategy-picker"
          value="Wild Encounter"
          checked={this.props.strategy === Constants.Strategy.WILD_ENCOUNTER} />
          Wild Encounter
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.BREEDING)}
          type="radio"
          name="strategy-picker"
          value="Breeding"
          checked={this.props.strategy === Constants.Strategy.BREEDING} />
          Breeding
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.POKE_RADAR)}
          type="radio"
          name="strategy-picker"
          value="Poké Radar"
          checked={this.props.strategy === Constants.Strategy.POKE_RADAR} />
          Poké Radar
        <br />
        <input onChange={() => this.props.updateStrategy(Constants.Strategy.CHAIN_FISHING)}
          type="radio"
          name="strategy-picker"
          value="Chain Fishing"
          checked={this.props.strategy === Constants.Strategy.CHAIN_FISHING} />
          Chain Fishing
        <br />
        {options}
        {strategySpecificOptions}
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
