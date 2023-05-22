import styled, { css } from 'styled-components';
import { ButtonViewType } from './BaseButton';

export const StyledButton = styled.button<{ $viewType: ButtonViewType }>`
  cursor: pointer;
  transition: all 250ms ease-in-out;
  font-size: 1.8rem;
  font-family: 'GalanoGrotesque', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  line-height: 1.35;
  font-weight: 600;
  width: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};

  svg {
    margin-left: 0.51em;
    path {
      transition: fill 250ms ease-in-out;
    }
  }

  &:hover,
  &:focus {
    color: #fff;
    path {
      fill: #fff;
    }
  }
  &:disabled {
    opacity: 0.5;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.black};
      path {
        fill: ${({ theme }) => theme.colors.black};
      }
    }
    svg {
      opacity: 0.5;
    }
    cursor: not-allowed;
  }

  ${({ $viewType }) =>
    $viewType === 'primary' &&
    css`
      background-color: ${({ theme }) => theme.colors.green};
      border: none;
      border-radius: 6px;
      height: 53px;
      &:hover,
      &:focus {
        box-shadow: 2px 2px 14px hsl(0deg 0% 100% / 25%);
      }
    `}

  ${({ $viewType }) =>
    $viewType === 'secondary' &&
    css`
      background-color: #fff;
      border: 1px solid #dfdfdf;
      border-radius: 6px;
      font-weight: 400;
      font-size: 1.4rem;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.black};
        border-color: ${({ theme }) => theme.colors.black};
        path {
          fill: ${({ theme }) => theme.colors.black};
        }
      }
    `}

    ${({ $viewType }) =>
    $viewType === 'text' &&
    css`
      color: ${({ theme }) => theme.colors.blue};
      background-color: transparent;
      border: none;
      font-weight: inherit;
      font-size: inherit;
      padding: 0;
      text-decoration: underline;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.black};
      }
    `};

  ${({ $viewType }) =>
    $viewType === 'transparent' &&
    css`
      background-color: transparent;
      border: none;
      font-weight: 400;
      padding: 0;
      font-size: 1.8rem;
      line-height: 1.125;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.black};
        path {
          fill: ${({ theme }) => theme.colors.black};
        }
      }

      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          font-size: 1.8rem;
        `)};
    `}
`;
