import React from 'react';

import * as Constants from './Constants'
import StrategyOption from './StrategyOption'

function CreateStrategyOption (optionType, updateOptionFunc, currentValue, key) {
  switch (optionType) {
    case Constants.StrategyOption.SHINY_DITTO:
      return <StrategyOption key={key}
                optionName={optionType}
                label={"Shiny Ditto"}
                updateOption={updateOptionFunc}
                currentValue={currentValue} />
    case Constants.StrategyOption.MASUDA_METHOD:
      return <StrategyOption key={key}
                optionName={optionType}
                label={"Masuda Method"}
                updateOption={updateOptionFunc}
                currentValue={currentValue} />
    case Constants.StrategyOption.SHINY_CHARM:
      return <StrategyOption key={key}
                optionName={optionType}
                label={"Shiny Charm"}
                updateOption={updateOptionFunc}
                currentValue={currentValue} />
    case Constants.StrategyOption.HORDE_ENCOUNTER:
      return <StrategyOption key={key}
                optionName={optionType}
                label={"Horde Encounter"}
                updateOption={updateOptionFunc}
                currentValue={currentValue} />
    default:
      return null
  }
}

export { CreateStrategyOption }