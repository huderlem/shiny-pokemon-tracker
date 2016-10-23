import React from 'react';

function EncounterButton(props) {
  return (
    <button className="plus-button" onClick={() => props.onClick(1)}>
      {props.symbol}
    </button>
  )
}

export default EncounterButton;
