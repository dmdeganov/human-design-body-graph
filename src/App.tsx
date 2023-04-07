import React, {useEffect, useRef, useState} from 'react';
import BodyGraphGrid from './components/BodyGraphGrid';
import {usePageSize} from './hooks/usePageSize';
import GenerateButton from './components/GenerateButton';
import SvgCanvas from './components/SvgCanvas';

export type AllGatesCoords = {
  [key: number]: {
    x: number;
    y: number;
  };
};
export const ActiveGatesContext = React.createContext<number[]>([]);

const App = () => {
  const [allGatesCoords, setAllGatesCoords] = useState<AllGatesCoords>({});
  const [activeGates, setActiveGates] = useState<number[]>([]);
  const {width, height} = usePageSize();
  const bodyGraphGridRef: React.RefObject<HTMLDivElement | null> = useRef(null);

  const areAllGatesRendered = Object.keys(allGatesCoords).length === 64;

  const getAllGatesCoords = (svgXOffset: number) => {
    const allGatesCoords: AllGatesCoords = {};
    for (let gateId = 1; gateId <= 64; gateId++) {
      const gate = document.getElementById(`gate${gateId}`) as HTMLSpanElement;
      if (gate?.getBoundingClientRect) {
        const {right: x, top: y, width, height} = gate.getBoundingClientRect();
        allGatesCoords[gateId] = {x: -svgXOffset + x - width / 2, y: y + height / 2};
      }
    }
    return allGatesCoords;
  };

  useEffect(() => {
    if (!bodyGraphGridRef.current) return;
    const svgXOffset = bodyGraphGridRef.current.getBoundingClientRect().x
    setAllGatesCoords(getAllGatesCoords(svgXOffset));
  }, [width, height]);


  return (
    <ActiveGatesContext.Provider value={activeGates}>
      <BodyGraphGrid ref={bodyGraphGridRef}>
        <SvgCanvas
          allGatesCoords={allGatesCoords}
          activeGates={activeGates}
          areAllGatesRendered={areAllGatesRendered}
        />
      </BodyGraphGrid>
      <GenerateButton setActiveGates={setActiveGates} />
    </ActiveGatesContext.Provider>
  );
};

export default App;
