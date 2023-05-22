import styled, { css } from 'styled-components';

export const StyledNavigation = styled.nav`
  display: none;
  margin-left: auto;

  ul {
    li {
      margin-left: 1.875em;
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: flex;
      align-items: center;
      ul {
        display: flex;
      }
    `)};
`;
