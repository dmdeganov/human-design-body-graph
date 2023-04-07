import React, {useContext} from 'react';
import {renderGates} from "./renderGates";
import {ActiveGatesContext} from "../../App";

const gates = [[6], [49, 37], [55, 22], [30, 36]];

const Spleen = () => {
  const activeGates = useContext(ActiveGatesContext);

  return <div className="triangle triangle--up solar">{renderGates(gates, activeGates)}</div>;
};

export default Spleen;
