import React, { useState } from 'react';
import * as S from './styles';
import Highlight from 'react-highlight';
import { ChainBoxes } from './ChainBoxes';
const Interpolation = () => {
  const [on, toggle] = useState(false);
  return (
    <S.Page color="khaki">
      <ChainBoxes toggle={toggle} on={on} />
      <S.ColDiv width="100%" align="center">
        <Highlight language="javascript">
          {`export const ChainBoxes = ({ on, toggle }) => {
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
    <S.BoxesContainer>
      <S.ToggleButton
        onClick={() => {
          toggle(!on);
          if (!on) {
            setTimeout(
              () =>
                window.scrollTo({
                  top: 1000,
                  left: 0,
                  behavior: 'smooth',
                }),
              750
            );
          }
        }}
      >
        Boxes Toggle
      </S.ToggleButton>
      <S.AnimatedBoxGrid style={{ width: size, height: size }}>
        {transition.map(({ item, key, props: animation }) => (
          <S.AnimatedBox key={key} style={animation} />
        ))}
      </S.AnimatedBoxGrid>
    </S.BoxesContainer>
  );
};`}
        </Highlight>
      </S.ColDiv>
    </S.Page>
  );
};

export default Interpolation;
