import React, { useState } from 'react';
import * as S from './styles';
import Highlight from 'react-highlight';
import { SplitOverlay } from './SplitOverlay';
const Interpolation = () => {
  const [open, toggle] = useState(false);
  return (
    <S.Page color="seagreen">
      <SplitOverlay close={() => toggle(!open)} open={open} />
      <S.ColDiv width="100%" align="center">
        <Highlight language="javascript">
          {`export const SplitOverlay = ({ open, close }) => {
  const { x } = useSpring({
    x: open ? 0 : 100,
    config: config.wobbly,
  });
  return (
    <S.OverlayContainer style={{ pointerEvents: open ? 'all' : 'none' }}>
      <S.OverlayLeft
        style={{
          transform: x.interpolate(x => 'translate3d(x * -1%, 0, 0)'),
        }}
      />
      <S.OverlayRight
        style={{
          transform: x.interpolate(x => 'translate3d(x%, 0, 0)'),
        }}
      >
        <CloseButton style={{color: 'white'}} onClick={close}>X</CloseButton>
      </S.OverlayRight>
    </S.OverlayContainer>
  );
};`}
        </Highlight>
        <S.ToggleButton onClick={() => toggle(!open)}>
          Toggle Overlay
        </S.ToggleButton>
      </S.ColDiv>
    </S.Page>
  );
};

export default Interpolation;
