import React from 'react';
import { useSpring } from 'react-spring';
import { CloseButton } from 'jdb-components';
import * as S from './styles';
export const SplitOverlay = ({ open, close, config }) => {
  const { x } = useSpring({
    x: open ? 0 : 100,
    config,
  });
  return (
    <S.OverlayContainer style={{ pointerEvents: open ? 'all' : 'none' }}>
      <S.OverlayLeft
        style={{
          transform: x.interpolate(x => `translate3d(${x * -1}%, 0, 0)`),
        }}
      />
      <S.OverlayRight
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`),
        }}
      >
        <CloseButton style={{color: 'white'}} onClick={close}>X</CloseButton>
      </S.OverlayRight>
    </S.OverlayContainer>
  );
};
