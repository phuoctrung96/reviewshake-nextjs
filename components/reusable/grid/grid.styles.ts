import styled from 'styled-components';
import { grid, GridProps, space, SpaceProps, flexbox, FlexboxProps } from 'styled-system';

export const StyledGrid = styled.div<GridProps & SpaceProps & FlexboxProps>`
  display: grid;

  ${grid}
  ${space}
  ${flexbox}
`;
