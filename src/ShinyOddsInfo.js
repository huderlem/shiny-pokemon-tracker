import React from 'react';
import * as ShinyOddsUtils from './ShinyOddsUtils'

class ShinyOddsInfo extends React.Component {
  getShinyChanceLabel(generation, strategy, options) {
    const chance = ShinyOddsUtils.getShinyChance(generation, strategy, options)
    if (chance <= 0) return "N/A"
    return `1/${Number(1/chance).toFixed(0)} (${Number(100 * chance).toFixed(4)}%)`
  }
  getStreakShinyChanceLabel(generation, strategy, options, streak) {
    const chance = ShinyOddsUtils.getCumulativeShinyChance(generation, strategy, options, streak)
    if (chance < 0) return "N/A"
    return `${Number(100 * chance).toFixed(4)}%`
  }
  render() {
    const shinyChanceLabel = this.getShinyChanceLabel(this.props.generation, this.props.strategy, this.props.options)
    const shinyChanceStreakLabel = this.getStreakShinyChanceLabel(this.props.generation, this.props.strategy, this.props.options, this.props.count)

    return (
      <div>
        <p>Chance of Shiny Encounter: {shinyChanceLabel}</p>
        <p>Chance After {this.props.count} encounters: {shinyChanceStreakLabel}</p>
      </div>
    )
  }
}

export default ShinyOddsInfo;
