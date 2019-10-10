import React, { useState } from 'react';
import { config } from 'react-spring';
import { Form, Field } from 'jdb-components';
import * as S from './styles';
import Highlight from 'react-highlight';
import { SplitOverlay } from './SplitOverlay';
const Interpolation = () => {
  const [open, toggle] = useState(false);
  const objOptions = [
    { id: 0, value: 'Default' },
    { id: 1, value: 'Gentle' },
    { id: 2, value: 'Molasses' },
    { id: 3, value: 'Slow' },
    { id: 4, value: 'Stiff' },
    { id: 5, value: 'Wobbly' },
  ];
  const [myConfig, setMyConfig] = useState('default');
  return (
    <S.Page color="seagreen">
      <SplitOverlay config={config[myConfig]} close={() => toggle(!open)} open={open} />
      <S.ColDiv width="100%" align="center">
        <S.ColDiv width="40%">
          <Form
            onSubmit={values => {
              const { spring_config } = values;
              setMyConfig(spring_config.toLowerCase())
            }}
          >
            <Field
              type="select"
              options={objOptions}
              required
              fieldName="spring_config"
            />
          </Form>
        </S.ColDiv>
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
