import React from 'react';

function EncountersLabel(props) {
  return (
    <p className="encounters-label">
      Encounters: {props.count}
    </p>
  )
}

export default EncountersLabel;
