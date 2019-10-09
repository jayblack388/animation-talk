import { useState, useEffect } from 'react';
import { useTransition } from 'react-spring';

export const useSimpleSlideIn = distance => {
  const xyz = `(0, ${distance}px, 0)`;
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: {
      opacity: 0,
      transform: `translate3d${xyz}`,
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: `translate3d${xyz}` },
  });
  useEffect(() => {
    toggle(true);
  }, []);
  return transition;
};

export const useSlideIn = (direction, distance) => {
  const isNegative = direction === 'left' || direction === 'down';
  const isHorizontal = direction === 'left' || direction === 'right';
  const mult = isNegative ? -1 : 1;
  const xyz = isHorizontal
    ? `(${mult * distance}px,0, 0)`
    : `(0, ${mult * distance}px, 0)`;
  const [on, toggle] = useState(false);
  const transition = useTransition(on, null, {
    from: {
      opacity: 0,
      transform: `translate3d${xyz}`,
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: `translate3d${xyz}` },
  });
  useEffect(() => {
    toggle(true);
  }, []);
  return transition;
};
