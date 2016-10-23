import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EncounterButton from './EncounterButton'
import EncountersLabel from './EncountersLabel'
import ShinyOddsInfo from './ShinyOddsInfo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      encounters: 0,
    }
  }
  updateEncounters(delta) {
    const newEncounters = Math.max(this.state.encounters + delta, 0)
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
        <EncounterButton symbol="+" onClick={() => this.updateEncounters(1)} />
        <EncounterButton symbol="-" onClick={() => this.updateEncounters(-1)} />
        <EncountersLabel count={this.state.encounters} />
        <ShinyOddsInfo count={this.state.encounters} />
        <button onClick={() => this.resetEncounters()}>Reset Counter</button>
      </div>
    );
  }
}

export default App;
