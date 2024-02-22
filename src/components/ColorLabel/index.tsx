import React from 'react';
import styled from 'styled-components';

import { hexToRgb } from '../../utils/hexToRgb';
import { rgbToHsl } from '../../utils/grbToHsl';

const Label = styled.div`
  display: flex;
  width: 200px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: 1px solid #ffffff;
`;

type ColorLabelProps = {
  color: string;
  isError: boolean;
  errorText: string;
  textColor: string;
  borderColor: string;
};

export const ColorLabel: React.FC<ColorLabelProps> = ({ color, isError, errorText, textColor, borderColor }) => {
  const hsl = rgbToHsl(hexToRgb(color)).map((item, index) => {
    if (item !== undefined && index === 2) return item / 1.25;
    return item;
  });

  const text = isError ? errorText : `RGB (${hexToRgb(color)})`;
  const backgroundColor = color === '#ffffff' ? '#ffffff' : `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%)`;

  return <Label style={{ backgroundColor: backgroundColor, color: textColor, borderColor: borderColor }}>{text}</Label>;
};
