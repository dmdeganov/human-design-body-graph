import React from 'react';
import {allPossibleLines} from '../static/allPosibleLines';
import Line from './lines/Line';
import {findMatchingGate} from '../utils/findMathingGate';
import ActiveLine from './lines/ActiveLine';
import {AllGatesCoords} from '../App';

type SvgCanvasProps = {
  allGatesCoords: AllGatesCoords;
  areAllGatesRendered: boolean;
  activeGates: number[];
};

const SvgCanvas = ({allGatesCoords, areAllGatesRendered, activeGates}: SvgCanvasProps) => {
  return (
    <svg width={500} height={704} className="svg-canvas">
      {areAllGatesRendered &&
        allPossibleLines.map(([gateFrom, gateTo]) => {
          const gateFromCoords = allGatesCoords[gateFrom];
          const gateToCoords = allGatesCoords[gateTo];
          return (
            <Line
              key={`${gateFrom}-${gateTo}`}
              x1={gateFromCoords.x}
              y1={gateFromCoords.y}
              x2={gateToCoords.x}
              y2={gateToCoords.y}
            />
          );
        })}
      {activeGates.map((gateId: number) => {
        const matchingGateId = findMatchingGate(gateId);
        if (!matchingGateId) return;
        return (
          <ActiveLine
            key={`${gateId}-${matchingGateId}`}
            x1={allGatesCoords[gateId].x}
            y1={allGatesCoords[gateId].y}
            x2={allGatesCoords[matchingGateId].x}
            y2={allGatesCoords[matchingGateId].y}
          />
        );
      })}
    </svg>
  );
};

export default SvgCanvas;
