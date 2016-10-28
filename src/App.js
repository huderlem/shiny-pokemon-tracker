import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Constants from './Constants'
import GenSelection from './GenSelection'
import EncounterButton from './EncounterButton'
import EncountersLabel from './EncountersLabel'
import OptionsSelection from './OptionsSelection'
import ShinyOddsInfo from './ShinyOddsInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      encounters: 0,
      generation: Constants.Generation.GEN_2,
      strategy: Constants.Strategy.BREEDING,
      options: {
        shinyDitto: false,
        masudaMethod: false,
        shinyCharm: false,
      },
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
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Shiny Pokémon Tracker</h1>
        </div>
        <p className="App-intro">
          Use the counter below to track your encounters.
        </p>
        <GenSelection onClick={(newGeneration) => this.setState({generation: newGeneration})}/>
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
        <EncounterButton symbol="+" onClick={() => this.addEncounters(1)} />
        <EncounterButton symbol="-" onClick={() => this.addEncounters(-1)} />
        <EncountersLabel count={this.state.encounters} onChange={(count) => this.setEncounters(count)} />
        <ShinyOddsInfo
          count={this.state.encounters}
          generation={this.state.generation}
          strategy={this.state.strategy}
          options={this.state.options} />
        <button onClick={() => this.resetEncounters()}>Reset Counter</button>
      </div>
    );
  }
}

export default App;
