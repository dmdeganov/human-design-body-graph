import React from 'react';
import {Ajna, GCenter, Head, Heart, Root, Sacral, Solar, Spleen, Throat} from "./centers";

const BodyGraphGrid = () => {

  return (
    <div className="body-graph-grid">
      <Head/>
      <Ajna />
      <Throat  />
      <div className="g-heart-centers">
        <GCenter/>
        <Heart/>
      </div>
      <Spleen/>
      <Sacral/>
      <Solar/>
      <Root/>
    </div>
  );
};

export default BodyGraphGrid;
