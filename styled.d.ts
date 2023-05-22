import 'styled-components';
import { CSSProp } from 'styled-components';
import themeStyles from './styled/theme.styles';

declare module 'styled-components' {
  type Theme = typeof themeStyles;

  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: InterpolationWithTheme<any>;
  }
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
