import React, {ForwardedRef, forwardRef} from 'react';
import {Ajna, GCenter, Head, Heart, Root, Sacral, Solar, Spleen, Throat} from './centers';

type BodyGraphGripProps = {
  children: React.ReactElement;
};

// eslint-disable-next-line react/display-name
function BodyGraphGridInner(props: BodyGraphGripProps, ref: ForwardedRef<HTMLDivElement | null>) {
  return (
    <div className="body-graph-grid" ref={ref}>
      <Head />
      <Ajna />
      <Throat />
      <div className="g-heart-centers">
        <GCenter />
        <Heart />
      </div>
      <Spleen />
      <Sacral />
      <Solar />
      <Root />
      {props.children}
    </div>
  );
}

// eslint-disable-next-line react/display-name
const BodyGraphGrid = forwardRef(BodyGraphGridInner);

export default BodyGraphGrid;
