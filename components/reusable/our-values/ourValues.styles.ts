import styled, { css } from 'styled-components';

export const StyledFaqDiv = styled.div`
  padding: 1.628em 0.3125em 1.875em 1.125em;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.black};

  &:first-child {
    padding-top: 0;
  }

  &:last-of-type {
    border-bottom: 0;
  }

  h3 {
    font-size: 2.6rem;
    line-height: 1.19231;
    font-weight: 600;
    margin-bottom: 0.9375rem;
    color: ${({ theme }) => theme.colors.black};
    position: relative;
    text-align: left;
    display: inline-flex;
    align-items: center;
  }

  span {
    font-size: 1.6rem;
    line-height: 1.1875;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlue};
    display: inline-block;
    margin-right: 0.6875em;
    position: absolute;
    left: -1em;
  }

  p {
    font-size: 1.5rem;
    line-height: 1.26667;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 0;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: flex;
      align-items: flex-start;
      min-height: 13rem;
      padding-top: 1.875em;

      h3 {
        margin-bottom: 0;
        flex-basis: 50%;
        padding-right: 1.25em;
      }

      p {
        flex-basis: 50%;
        padding-left: 0;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      span {
        left: -1.2em;
      }

      h3 {
        font-size: 3.6rem;
        line-height: 1.16667;
      }

      p {
        font-size: 1.8rem;
        line-height: 1.5;
        padding-left: 1.2em;
      }
    `)};
`;
