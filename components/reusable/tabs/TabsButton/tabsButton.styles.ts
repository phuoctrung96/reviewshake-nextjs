import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ $isActive: boolean }>`
  background-color: #f7f7fa;
  border: 1px solid #e6e6ea;
  color: #9e9eb9;
  width: 100%;
  height: 48px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: 200ms color ease-in-out;
  position: relative;
  z-index: 1;

  &:first-child {
    border-radius: 6px 6px 0 0;

    span {
      border-radius: 6px 6px 0 0;
    }
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.black};
  }

  &:disabled {
    cursor: default;
  }

  span {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.green};
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: 120px;
      border-radius: 6px 6px 0 0;

      span {
        border-radius: 9px 9px 0 0;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      width: 130px;
    `)}

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${({ theme }) => theme.colors.black};
      background-color: #fff;
      border-bottom: 1px solid #fff;

      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          &:after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            height: 2px;
            width: 100%;
            background-color: #fff;
          }
        `)};
    `}
`;
