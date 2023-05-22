import Link from 'next/link';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 1em;

  p {
    font-size: 1.4rem;
    margin: 3px 0 0;
    font-weight: 400;
    line-height: 1.35;
  }

  svg {
    display: none;
  }

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      svg {
        display: inline-block;
        margin-left: 0.51em;
        transition: transform 0.15s ease-in-out;
        opacity: 0;
      }
      &:hover,
      &:focus {
        svg {
          opacity: 1;
          transform: translateX(0.5em);
        }
      }
    `)};
`;

export const StyledSpan = styled.span<{ $isOpen: boolean }>`
  align-self: center;
  margin-bottom: 5px;
  transform-origin: 50% 55%;

  svg {
    transition: transform 0.3s ease-in-out;
    transform-origin: 50% 55%;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      svg {
        transform: rotate(180deg);
        ${({ theme }) =>
          theme.mediaQueries('xl')(css`
            transform: none;
          `)};
      }
    `};
`;

export const StyledDropdownWrDiv = styled.div`
  > button {
    height: 2.8333em;
    line-height: 2.7222em;
    + div:hover,
    &:hover + div,
    &:focus + div {
      transform-origin: 0 20px;
      animation: fadeIn 150ms linear forwards;
    }
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.green};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.green};
        }
      }
    }
  }
`;

export const StyledDropdownDiv = styled.div<{ $isOpen: boolean }>`
  ${({ $isOpen }) =>
    $isOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: block;
      position: absolute;
      background-color: #fff;
      border: 1px solid #fff;
      box-shadow: 10px 12px 80px 5px rgb(10 29 77 / 12%);
      border-radius: 3px;
      top: 46px;
      right: -28px;
      width: max-content;
      animation: fadeOut 0.15s linear forwards;
      opacity: 0;

      &:before {
        display: block;
        content: '';
        width: 15px;
        height: 15px;
        border-radius: 0 2px 0 0;
        position: absolute;
        border: solid ${({ theme }) => theme.colors.white};
        border-width: 1px 1px 0 0;
        background-color: #fff;
        top: -8px;
        right: 21px;
        bottom: auto;
        transform: translateX(-50%) rotate(315deg);
      }

      > ul {
        display: flex;
        flex-direction: column;
        padding: 1.5em;
        margin: 0;
        max-width: 450px;

        li {
          margin: 0;
          &:last-child {
            a {
              font-size: 1.6rem;
              margin: 0;
              p {
                margin: 0;
              }
            }
          }
        }
      }
    `)};

  @keyframes fadeIn {
    0% {
      transform: scale(0.9);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.9);
      opacity: 0;
      pointer-events: none;
    }
  }
`;
