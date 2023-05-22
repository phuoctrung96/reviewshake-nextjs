import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  BordersProps,
  border,
} from 'styled-system';

export const StyledDiv = styled.div<
  FlexboxProps & SpaceProps & PositionProps & GridProps & ColorProps & BordersProps
>`
  ${flexbox}
  ${grid}
  ${space}
  ${position}
  ${color}
  ${border}
`;
