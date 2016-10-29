import React from 'react';

function StrategyOption(props) {
  return (
    <div>
      <input
        onChange={() => {
          const nextChecked = !props.currentValue
          props.updateOption(props.optionName, nextChecked)
        }}
        type="checkbox"
        name={`${props.optionName}-picker`}
        checked={props.currentValue} />
        {props.label}
      <br />
    </div>
  )
}

export default StrategyOption;