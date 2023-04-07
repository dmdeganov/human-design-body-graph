import React from 'react';

export const renderGates = (gates: number[][], activeGates: number[]) =>
  gates.map(gatesGroup => (
    <div key={gatesGroup.join('')} className="gates-row">
      {gatesGroup.map(gate => (
        <span key={gate} id={`gate${gate}`} className={activeGates.includes(gate) ? 'gate-active' : ''}>
          {gate}
        </span>
      ))}
    </div>
  ));
