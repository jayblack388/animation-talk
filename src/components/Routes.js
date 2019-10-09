import React from 'react';
import { useTransition } from 'react-spring';
import { Switch, Route } from 'react-router-dom';
import Basics from './Basics';
import Chain from './Chain';
import Transition from './Transition';
import Interpolation from './Interpolation';
import { useRouter } from '../hooks';
import * as S from './styles';
export const Routes = ({ hasTransition, setHasTransition }) => {
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
        <Route exact path="/chain" component={Chain} />
        <Route exact path="/interpolation" component={Interpolation} />
        <Route path="/" component={Basics} />
      </Switch>
    </S.SwitchContainer>
  );
};
export const RoutesWithTransitions = ({ hasTransition, setHasTransition }) => {
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
  ));
};
