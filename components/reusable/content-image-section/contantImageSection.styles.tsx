import styled, { css } from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

export const StyledImageWrDiv = styled.div`
  img {
    &:first-child {
      display: none;
    }
    &:last-child {
      aspect-ratio: 3/4;
    }

    ${({ theme }) =>
      theme.mediaQueries('md')(css`
        &:first-child {
          display: block;
        }
        &:last-child {
          display: none;
        }
      `)};
  }
`;

export const StyledImageWrDivDesktop = styled.div<LayoutProps>`
  ${layout}
`;
