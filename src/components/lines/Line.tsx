import styled, {keyframes} from "styled-components";

type lineCoords = {
  x1: number,
  x2: number,
  y1: number,
  y2: number
}
const getLineLength = ({x1, x2, y1, y2} :lineCoords ): number => {
  return Math.sqrt(Math.pow((Math.abs(x1-x2)),2) + Math.pow((Math.abs(y1-y2)),2))
}

export default styled.line.attrs(props =>({x1 : props.x1, x2: props.x2, y1: props.y1, y2: props.y2}))`
  stroke-dasharray: ${(props  ) => getLineLength(props as lineCoords ) || 0};
  stroke-dashoffset: 0;
  stroke: whitesmoke;
  stroke-width: 2;
  animation: ${(props )=> fillLine(getLineLength(props as lineCoords ))} 2s linear; 
`
const fillLine = (lineLength: number) =>  keyframes`
  from {
    stroke-dashoffset: ${lineLength};
  }
  to {
    stroke-dashoffset: 0;
  }
`
