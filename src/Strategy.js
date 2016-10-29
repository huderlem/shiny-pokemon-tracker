import React from 'react';

function Strategy(props) {
  return (
    <div>
      <input onChange={() => props.updateStrategy(props.targetStrategy)}
          type="radio"
          name="strategy-picker"
          value={props.strategyName}
          checked={props.currentStrategy === props.targetStrategy} />
          {props.strategyName}
        <br />
    </div>
  )
}

export default Strategy;