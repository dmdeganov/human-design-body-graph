import React, {useContext} from 'react';
import {renderGates} from "./renderGates";
import {ActiveGatesContext} from "../../App";

const gates = [[47, 24, 4], [17, 11], [43]];

const Ajna = () => {
  const activeGates = useContext(ActiveGatesContext);

  return (
    <div className="triangle triangle--down ajna">
      {renderGates(gates, activeGates)}
    </div>
  );
};

export default Ajna;
