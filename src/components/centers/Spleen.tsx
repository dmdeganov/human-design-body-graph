import React, {useContext} from 'react';
import {renderGates} from "./renderGates";
import {ActiveGatesContext} from "../../App";

const gates = [[50], [44, 32], [57, 28], [48, 18]];

const Spleen = () => {
  const activeGates = useContext(ActiveGatesContext);

  return <div className="triangle triangle--up spleen">{renderGates(gates, activeGates)}</div>;
};

export default Spleen;
