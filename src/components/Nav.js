import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { useRouter } from '../hooks';
import * as S from './styles';

export const Nav = ({ close, animation }) => {
  const { history } = useRouter();
  const handleNav = to => {
    history.push(to);
    close();
  };
  return (
    <S.AnimatedNavContainer style={animation}>
      <S.Nav>
        <S.LinkContainer>
          <S.Link onClick={() => handleNav('/')}>Basics</S.Link>
          <S.Link onClick={() => handleNav('/interpolation')}>Interpolation</S.Link>
          <S.Link onClick={() => handleNav('/transition')}>Transition</S.Link>
          <S.Link onClick={() => handleNav('/chain')}>Chain</S.Link>
        </S.LinkContainer>
      </S.Nav>
    </S.AnimatedNavContainer>
  );
};

export const Header = () => {
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
};
