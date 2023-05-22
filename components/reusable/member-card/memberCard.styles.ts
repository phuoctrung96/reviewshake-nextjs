import styled, { css } from 'styled-components';

export const StyledDivCard = styled.div`
  padding: 0.625em 0.625em 0.9375em;
  background-color: #fff;
  box-shadow: 2px 2px 19px rgb(10 29 77 / 3%);
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  height: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      padding: 0.625em 0.625em 0.8125em;
    `)};
`;

export const StyledImageWrapper = styled.div`
  overflow: hidden;
  display: flex;
  height: auto;
  border-radius: 5px;
  img {
    object-fit: cover;
    object-position: center center;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      max-height: 252px;
      width: auto;
    `)};
`;
