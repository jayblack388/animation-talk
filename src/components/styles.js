import { animated } from 'react-spring';
import styled from 'styled-components';

export const FlexDiv = styled.div`
  display: flex;
  ${props => (props.height ? `height: ${props.height}` : '')}
  ${props => (props.width ? `width: ${props.width}` : '')}
  ${props => (props.justify ? `justify-content: ${props.justify}` : '')}
  ${props => (props.align ? `align-items: ${props.align}` : '')}
`;
export const RowDiv = styled(FlexDiv)`
  flex-direction: row;
`;
export const ColDiv = styled(FlexDiv)`
  flex-direction: column;
  pre {
    background: #000;
    color: #fff;
    padding: 1rem;
  }
`;
export const BlockSpan = styled.span`
  display: block;
`;
export const Page = styled.main`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${props => props.color || '#fff'};
  padding: 0.8rem 1.6rem;
`;
export const Header = styled.header`
  width: 100%;
  background: #48077f;
  display: flex;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 0 5%;
`;
export const AnimatedBox = styled(animated.div)`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background: #48077f;
`;
export const AnimatedBoxGrid = styled(animated.div)`
  display: grid;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: 20px;
  padding: 20px;
  background: white;
`;
export const BoxesContainer = styled.div`
  height: 100vh;
  width: 100%;
`;
export const MenuButton = styled.button`
  appearance: none;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  background: transparent;
  border: none;
  z-index: 15;
  cursor: pointer;
`;
export const ToggleButton = styled(MenuButton)`
  z-index: 1;
`;
export const Link = styled(MenuButton)``;
export const LinkContainer = styled(ColDiv)`
  align-items: center;
  justify-content: center;
`;
export const AnimatedNavContainer = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 100px;
  background: blueviolet;
  z-index: 10;
`;
export const Nav = styled.nav``;
export const OverlayContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  z-index: 10;
`;
export const OverlayLeft = styled(animated(ColDiv))`
  width: 30%;
  height: 100%;
  background: white;
`;
export const OverlayRight = styled(animated(ColDiv))`
  width: 70%;
  height: 100%;
  background: #810677;
  position: relative;
`;
export const SwitchContainer = styled(animated(ColDiv))`
  height: 100vh;
  width: 100vw;
`;
export const RotatingBox = styled(animated.div)`
  background: #fff;
  position: absolute;
`;
export const AccordionContainer = styled(animated(ColDiv))``;
export const Accordion = styled.div``;
