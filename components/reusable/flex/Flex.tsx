import { PropsWithChildren } from 'react';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
} from 'styled-system';
import { StyledDiv } from './flex.styles';

const Flex = ({
  children,
  color,
  ...props
}: PropsWithChildren &
  FlexboxProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps) => {
  return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default Flex;
