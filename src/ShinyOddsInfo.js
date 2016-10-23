import React from 'react';
import * as ShinyOddsUtils from './ShinyOddsUtils'

class ShinyOddsInfo extends React.Component {
  getShinyChanceLabel() {
    const chance = ShinyOddsUtils.getShinyChance()
    if (chance <= 0) return "N/A"
    return `1/${Number(1/chance).toFixed(0)} (${Number(100 * chance).toFixed(4)}%)`
  }
  getStreakShinyChanceLabel(streak) {
    const chance = ShinyOddsUtils.getCumulativeShinyChance(streak)
    if (chance < 0) return "N/A"
    return `${Number(100 * chance).toFixed(4)}%`
  }
  render() {
    return (
      <div>
        <p>
          Chance of Shiny Encounter: {this.getShinyChanceLabel()}
        </p>
        <p>
          Chance After {this.props.count} encounters: {this.getStreakShinyChanceLabel(this.props.count)}
        </p>
      </div>
    )
  }
}

export default ShinyOddsInfo;
