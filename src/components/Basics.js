import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import Highlight from 'react-highlight';
import * as S from './styles';
const Basics = () => {
  const [on, toggle] = useState(false);
  const spring = useSpring({
    background: on ? 'teal' : '#fff',
    height: on ?'50vh' : '5rem',
    width: on ? '50vw' : '5rem',
    transform: on ? 'rotate(90deg)' : 'rotate(0deg)',
  });
  return (
    <S.Page color="cornflowerblue">
      <S.ColDiv align="center">
        <S.RotatingBox style={spring} />
        <S.ToggleButton style={{marginTop: '5rem'}} onClick={() => toggle(!on)}>
          Toggle Animation
        </S.ToggleButton>
        <Highlight language="javascript">
          {`const Basics = () => {
  const [on, toggle] = useState(false);
  const spring = useSpring({
    background: on ? 'teal' : '#fff',
    transform: on ? 'scale(1.5) rotate(90deg)' : 'scale(0.75) rotate(0deg)',
  });
  return (
    <S.Page color='cornflowerblue'>
      <S.RotatingBox style={spring} />
      <S.ToggleButton onClick={() => toggle(!on)}>
        Toggle Animation
      </S.ToggleButton>
    </S.Page>
  );
};`}
        </Highlight>
        <Highlight language="javascript">
          {`const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const animation = useSpring({
    transform: navOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)',
  });
  return (
    <S.Header>
      <S.MenuButton onClick={() => setNavOpen(!navOpen)}>Menu</S.MenuButton>
      <Nav animation={animation} close={() => setNavOpen(false)} />
    </S.Header>
  );
};`}
        </Highlight>
      </S.ColDiv>
    </S.Page>
  );
};

export default Basics;
