import styled from 'styled-components';
import {
  BackgroundProps,
  border,
  BorderProps,
  color,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from 'styled-system';

export const StyledDiv = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['display', 'width', 'height', 'overflow'].includes(prop),
})<FlexboxProps & SpaceProps & LayoutProps & BackgroundProps & BorderProps & PositionProps>`
  display: flex;

  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${border}
  ${position}
`;
