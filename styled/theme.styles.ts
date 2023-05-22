const DEFAULT_BREAKPOINTS = ['350px', '576px', '768px', '992px', '1170px'];

const breakpoints: any = DEFAULT_BREAKPOINTS;

export type ThemeColorsType = keyof typeof colors;

const colors = {
  green: '#25E85F',
  greenDarkBg: '#03CEA4',
  lightBlueBg: '#EAFFFD',
  black: '#000009',
  blackBg: '#1C1D21',
  gray: '#F7F7F7',
  grayText: '#B9B9B9',
  grayDarkText: '#66717E',
  grayBorder: '#E6E6EA',
  darkBlue: '#2B2B59',
  red: '#E71D36',
  redBg: '#F5E2E3',
  orange: '#FFA630',
  orangeBg: '#F9F1E4',
  blue: '#3772FF',
  blueBg: '#E5EAFA',
  white: '#ffffff',
};

const space = [0, '0.125rem', '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'];

const fontStack =
  "'GalanoGrotesque', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

const fontFamilies = {
  body: fontStack,
  heading: fontStack,
};

// takes
const mediaQueries = (key: keyof typeof breakpoints): any => {
  return (style: any) => `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};

const fontSizes = ['2rem', '2rem', '2rem', '1.8rem', '2rem'];

const lineHeights = [1.5, 1.5, 1.6, 1.5];

breakpoints.xs = breakpoints[0];
breakpoints.s = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const theme = { breakpoints, colors, fontSizes, lineHeights, fontFamilies, space, mediaQueries };
export default theme;
