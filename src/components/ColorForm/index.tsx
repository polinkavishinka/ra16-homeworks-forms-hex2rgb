import React, { useState } from 'react';

import styled from 'styled-components';

const Input = styled.input`
  width: 200px;
  height: 50px;
  padding: 10px;
  text-align: center;
  font-size: 22px;
  margin-bottom: 8px;
`;

type ColorFormProps = {
  onChangeColor(value: string): void;
  startColor: string;
};

export const ColorForm: React.FC<ColorFormProps> = ({ onChangeColor, startColor }) => {
  const [inputValue, setinputValue] = useState<string>(startColor);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length <= 7) {
      setinputValue(`#${value.slice(1)}`);

      if (value.length === 7) onChangeColor(value);
    }
  };

  return <Input type='text' value={inputValue} onChange={changeHandler} name='color' />;
};
