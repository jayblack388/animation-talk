import React from 'react';
import Highlight from 'react-highlight';
import * as S from './styles';
const Transition = ({ hasAnimation = true, setHasAnimation }) => {
  const content = hasAnimation
    ? `export const RoutesWithTransitions = () => {
    const { location } = useRouter();
    const transitions = useTransition(location, location => location.key, {
      from: {
        opacity: 0,
        position: 'absolute',
        width: '100%',
        transform: 'translate3d(100%, 0, 0)',
      },
      enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
      leave: { opacity: 0, transform: 'translate3d(0, 100%, 0)' },
    });
    return transitions.map(({ item, key, props: transition }) => (
      <S.SwitchContainer key={key} style={transition}>
        <Switch location={item}>
          <Route exact path="/transition" component={Transition} />
          <Route exact path="/interpolation" component={Interpolation} />
          <Route path="/" component={Basics} />
        </Switch>
      </S.SwitchContainer>
    ));
  };`
    : `export const Routes = ({ hasTransition, setHasTransition }) => {
      return (
        <S.SwitchContainer>
          <Switch>
            <Route
              exact
              path="/transition"
              render={() => (
                <Transition
                  hasAnimation={hasTransition}
                  setHasAnimation={setHasTransition}
                />
              )}
            />
            <Route exact path="/interpolation" component={Interpolation} />
            <Route path="/" component={Basics} />
          </Switch>
        </S.SwitchContainer>
      );
    };`;
  return (
    <S.Page color="tomato">
      <Highlight language="javascript">{content}</Highlight>
      <S.ToggleButton onClick={setHasAnimation}>Toggle Routes</S.ToggleButton>
    </S.Page>
  );
};

export default Transition;
