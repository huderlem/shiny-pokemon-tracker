import React from 'react';

import * as Constants from './Constants'

function GenSelection(props) {
  return (
    <ul className="gen-selection">
      <button className="gen-2-selection" onClick={() => props.onClick(Constants.Generation.GEN_2)}>Gen. 2</button>
      <button className="gen-3-selection" onClick={() => props.onClick(Constants.Generation.GEN_3)}>Gen. 3</button>
    </ul>
  )
}

export default GenSelection;
