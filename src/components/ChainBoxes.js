import React, { useRef } from 'react';
import { useChain, useSpring, useTransition } from 'react-spring';
import * as S from './styles';

const items = [1, 0.5, 0.1, 0.75, 10, 0.2, 0.3, 0.25];

export const ChainBoxes = ({ on, toggle }) => {
  const springRef = useRef();
  const { size } = useSpring({
    ref: springRef,
    to: { size: on ? '100%' : '0%' },
    from: { size: '0%' },
  });
  const transRef = useRef();
  const transition = useTransition(on ? items : [], item => item, {
    ref: transRef,
    trail: 100,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
  });
  useChain(on ? [springRef, transRef] : [transRef, springRef]);
  return (
    <>
      <S.AnimatedBoxGrid style={{ width: size, height: size }}>
        {transition.map(({ item, key, props: animation }) => (
          <S.AnimatedBox key={key} style={animation} />
        ))}
      </S.AnimatedBoxGrid>
      <S.ToggleButton
        style={{ fontSize: '1.6rem' }}
        onClick={() => {
          toggle(!on);
        }}
      >
        Boxes Toggle
      </S.ToggleButton>
    </>
  );
};
