import { PropsWithChildren } from 'react';
import { FlexboxProps, GridProps, SpaceProps } from 'styled-system';
import { StyledGrid } from './grid.styles';

const Grid = ({
  children,
  ...props
}: PropsWithChildren & GridProps & SpaceProps & FlexboxProps) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};

export default Grid;
