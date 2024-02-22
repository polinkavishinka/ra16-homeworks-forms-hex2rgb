import React, { useState } from 'react';
import styled from 'styled-components';
import hexColorRegex from 'hex-color-regex';

import { ColorForm } from './components/ColorForm';
import { ColorLabel } from './components/ColorLabel';

const START_COLOR = '#336666';
const ERROR_COLOR = '#ea4b35';
const ERROR_TEXT = 'Ошибка!';

const Bacground = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  const [color, setColor] = useState<string>(START_COLOR);
  const [isErrorColor, setIsErrorColor] = useState<boolean>(false);

  const changeColorHandler = (color: string) => {
    if (hexColorRegex().test(color)) {
      setIsErrorColor(false);
      setColor(color);
    } else {
      setIsErrorColor(true);
    }
  };

  const createStyles = () => {
    const textColor = isErrorColor ? '#ffffff' : color === '#ffffff' ? '#000000' : '#ffffff';
    const borderColor = isErrorColor ? ERROR_COLOR : color === '#ffffff' ? '#000000' : '#ffffff';
    const bgColor = isErrorColor ? ERROR_COLOR : color;
    const labelColor = isErrorColor ? ERROR_COLOR : color;
    return { textColor, borderColor, bgColor, labelColor };
  };

  return (
    <Bacground style={{ backgroundColor: createStyles().bgColor }}>
      <ColorForm onChangeColor={changeColorHandler} startColor={START_COLOR} />
      <ColorLabel color={createStyles().labelColor} isError={isErrorColor} errorText={ERROR_TEXT} borderColor={createStyles().borderColor} textColor={createStyles().textColor} />
    </Bacground>
  );
};

export default App;
