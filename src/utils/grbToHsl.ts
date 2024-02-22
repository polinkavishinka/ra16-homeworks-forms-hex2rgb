const rgbToHsl = (rgb: Array<number>) => {
  let r = rgb[0];
  let g = rgb[1];
  let b = rgb[2];

  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = (max + min) / 2 || 0;
  let s = (max + min) / 2 || 0;
  let l = (max + min) / 2 || 0;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    if (h) h /= 6;
  }
  let HSL = [];
  HSL.push(h * 360);
  HSL.push(s * 100);
  HSL.push(l * 100);

  return HSL;
};

export { rgbToHsl };
