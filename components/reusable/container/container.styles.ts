import styled, { css } from 'styled-components';
import { flexbox, space, SpaceProps, FlexboxProps, PositionProps, position } from 'styled-system';

export const StyledContainer = styled.div<
  { $isFlex: boolean } & SpaceProps & FlexboxProps & PositionProps
>`
  width: 100%;
  margin: 0 auto;

  ${({ $isFlex }) =>
    $isFlex &&
    css`
      display: flex;
    `}

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      max-width: 772px;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      max-width: 1170px;
    `)};

  ${space}
  ${flexbox}
  ${position}
`;
