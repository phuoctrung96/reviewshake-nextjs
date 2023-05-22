import styled, { css } from 'styled-components';

export const StyledProfilePageChartsWr = styled.div`
  margin-bottom: 1.25em;
  overflow: hidden;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      margin-bottom: 1.875em;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 0;
      > div {
        flex: 0 1 calc(50% - 0.9375em);
        margin-bottom: 1.875em;
      }
    `)};
`;
