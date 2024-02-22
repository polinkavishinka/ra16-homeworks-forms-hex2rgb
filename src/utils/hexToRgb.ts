const hexToRgb = (hex: string) => {
  const code = hex.split('#')[1];
  const rgbArr = [];

  for (let i = 0; i < code.length; i += 2) {
    rgbArr.push(Number.parseInt(code[i] + code[i + 1], 16));
  }

  return rgbArr;
};

export { hexToRgb };
