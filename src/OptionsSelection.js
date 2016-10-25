import React, { Component } from 'react';

import * as Constants from './Constants'

class OptionsSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {checked: this.props.options.shinyDitto}
  }
  renderGen2Options() {
    let options
    if (this.props.strategy === Constants.Strategy.BREEDING) {
      options = (
        <div>
          <input
            onChange={() => {
              const nextChecked = !this.state.checked
              this.setState({ checked: nextChecked })
              this.props.updateOption("shinyDitto", nextChecked)
            }}
            type="checkbox"
            name="shiny-ditto-picker"
            checked={this.state.checked} />
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
    return null
  }
  render() {
    switch (this.props.generation) {
      case Constants.Generation.GEN_2:
        return this.renderGen2Options(this.props)
      case Constants.Generation.GEN_3:
        return this.renderGen3Options(this.props)
      default:
        return null
    }
  }
}

export default OptionsSelection;
