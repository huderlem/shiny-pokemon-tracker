import React, { Component } from 'react';
import './App.css';

import * as Constants from './Constants'
import GenSelection from './GenSelection'
import EncounterButton from './EncounterButton'
import EncountersLabel from './EncountersLabel'
import OptionsSelection from './OptionsSelection'
import * as OptionsSettings from './OptionsSettings'
import ShinyOddsInfo from './ShinyOddsInfo'

class App extends Component {
  constructor() {
    super()
    const optionsKeys = [
      Constants.StrategyOption.SHINY_DITTO,
      Constants.StrategyOption.MASUDA_METHOD,
      Constants.StrategyOption.SHINY_CHARM,
      Constants.StrategyOption.HORDE_ENCOUNTER,
    ]
    let optionsObj = {}
    optionsKeys.forEach((key) => optionsObj[key] = false)
    this.state = {
      encounters: 0,
      generation: Constants.Generation.GEN_2,
      strategy: Constants.Strategy.BREEDING,
      options: optionsObj,
    }
  }
  addEncounters(delta) {
    const newEncounters = Math.max(this.state.encounters + delta, 0)
    this.setState({
      encounters: newEncounters,
    })
  }
  setEncounters(count) {
    const newEncounters = Math.max(count, 0)
    this.setState({
      encounters: newEncounters,
    })
  }
  resetEncounters() {
    this.setState({
      encounters: 0,
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="s_gyarados.png" className="App-logo" alt="logo" />
          <h1>Shiny Pokémon Tracker</h1>
        </div>
        <p className="App-intro">
          Use the counter below to track your encounters.
        </p>
        <div className="container">
          <GenSelection
            generation={this.state.generation}
            onClick={(newGeneration) => {
              this.setState({generation: newGeneration})
              if (!OptionsSettings.GenStrategies[newGeneration].includes(this.state.strategy)) {
                this.setState({strategy: OptionsSettings.GenStrategies[newGeneration][0]})
              }
          }}/>
          <OptionsSelection
            generation={this.state.generation}
            strategy={this.state.strategy}
            options={this.state.options}
            updateStrategy={(newStrategy) => this.setState({strategy: newStrategy})}
            updateOption={(key, value) => {
              const newOptions = Object.assign({}, this.state.options)
              newOptions[key] = value
              this.setState({options: newOptions})
            }} />
          <div className="shiny-info">
            <div className="encounter-buttons">
              <EncounterButton symbol="+" onClick={() => this.addEncounters(1)} />
              <EncounterButton symbol="-" onClick={() => this.addEncounters(-1)} />
              <button className="reset-counter" onClick={() => this.resetEncounters()}>Reset</button>
            </div>
            <EncountersLabel count={this.state.encounters} onChange={(count) => this.setEncounters(count)} />
            <ShinyOddsInfo
              count={this.state.encounters}
              generation={this.state.generation}
              strategy={this.state.strategy}
              options={this.state.options} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
