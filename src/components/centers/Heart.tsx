import React, {useContext} from 'react';
import {renderGates} from './renderGates';
import {ActiveGatesContext} from "../../App";

const gates = [[40], [21, 51, 26]];

const Heart = () => {
  const activeGates = useContext(ActiveGatesContext);

  return <div className="heart">{renderGates(gates,activeGates)}</div>;
};

export default Heart;
