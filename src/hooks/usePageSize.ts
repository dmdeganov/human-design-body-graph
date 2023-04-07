import React from 'react';

function onWindowSizeChange(onChange: () => void) {
  window.addEventListener('resize', onChange);

  return () => window.removeEventListener('resize', onChange);
}

const getWindowWidthSnapshot = () =>
  Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.body.clientWidth,
    document.documentElement.clientHeight,
  ) - 0.1;

const getWindowHeightSnapshot = () =>
  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  ) - 0.1;

export function usePageSize() {
  const windowWidth = React.useSyncExternalStore(onWindowSizeChange, getWindowWidthSnapshot);

  const windowHeight = React.useSyncExternalStore(onWindowSizeChange, getWindowHeightSnapshot);

  return {width: windowWidth, height: windowHeight};
}
