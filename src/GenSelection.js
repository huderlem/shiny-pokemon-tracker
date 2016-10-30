import React from 'react';

import * as Constants from './Constants'

function GenSelection(props) {
  return (
    <ul className="gen-selection">
   	  {Constants.GenerationOrder.map((gen, i) => {
        const buttonSelected = props.generation === gen
        return <button key={i} className={`gen-${i+2}-button ${buttonSelected ? "selected" : "unselected"}`} onClick={() => props.onClick(gen)}>{Constants.GenerationLabel[gen]}</button>
      })}
    </ul>
  )
}

export default GenSelection;
