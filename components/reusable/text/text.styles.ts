import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { CSSProperties } from 'react';
import theme from '@/styled/theme.styles';
import { TextViewType } from './Text';

const StyledText = styled('p').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['fontSize', 'lineHeight', 'fontWeight', 'color'].includes(prop),
})<
  { $viewType: TextViewType; $textTransform: CSSProperties['textTransform'] } & ColorProps &
    TypographyProps &
    SpaceProps &
    LayoutProps
>`
  color: ${({ theme }) => theme.colors.darkBlue};

  ${({ $textTransform }) =>
    $textTransform &&
    css`
      text-transform: ${$textTransform};
    `};

  ${(props) =>
    props.$viewType === 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.grayText};
    `}

  ${space}
  ${typography}
  ${layout}
  ${color}
`;

StyledText.defaultProps = {
  fontSize: theme.fontSizes,
  lineHeight: theme.lineHeights,
};

export default StyledText;
