import React from 'react';

import * as Constants from './Constants'
import Strategy from './Strategy'

function CreateStrategy (strategyType, updateStrategyFunc, currentStrategy, key) {
	switch (strategyType) {
		case Constants.Strategy.WILD_ENCOUNTER:
      return <Strategy key={key}
                targetStrategy={Constants.Strategy.WILD_ENCOUNTER}
                strategyName={"Wild Encounter"}
                updateStrategy={updateStrategyFunc}
                currentStrategy={currentStrategy} />
    case Constants.Strategy.BREEDING:
      return <Strategy key={key}
                targetStrategy={Constants.Strategy.BREEDING}
                strategyName={"Breeding"}
                updateStrategy={updateStrategyFunc}
                currentStrategy={currentStrategy} />
    case Constants.Strategy.POKE_RADAR:
      return <Strategy key={key}
                targetStrategy={Constants.Strategy.POKE_RADAR}
                strategyName={"Poké Radar"}
                updateStrategy={updateStrategyFunc}
                currentStrategy={currentStrategy} />
    case Constants.Strategy.CHAIN_FISHING:
      return <Strategy key={key}
                targetStrategy={Constants.Strategy.CHAIN_FISHING}
                strategyName={"Chain Fishing"}
                updateStrategy={updateStrategyFunc}
                currentStrategy={currentStrategy} />
    case Constants.Strategy.FRIEND_SAFARI:
      return <Strategy key={key}
                targetStrategy={Constants.Strategy.FRIEND_SAFARI}
                strategyName={"Friend Safari"}
                updateStrategy={updateStrategyFunc}
                currentStrategy={currentStrategy} />
    default:
      return null
	}
}

export { CreateStrategy }