import { PropsWithChildren } from 'react';
import {
  BordersProps,
  ColorProps,
  FlexboxProps,
  GridProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import { StyledDiv } from './box.styles';

const Box = ({
  children,
  color,
  ...props
}: PropsWithChildren &
  FlexboxProps &
  GridProps &
  SpaceProps &
  PositionProps &
  ColorProps &
  BordersProps) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Box;
