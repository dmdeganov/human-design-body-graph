import React, {useContext} from 'react';
import {renderGates} from "./renderGates";
import {ActiveGatesContext} from "../../App";

const gates = [[53,60,52], [54,19], [38, 39], [58, 41]];

const Root = ()  => {
  const activeGates = useContext(ActiveGatesContext);

  return <div className="square root">{renderGates(gates, activeGates)}</div>;
};

export default Root;
