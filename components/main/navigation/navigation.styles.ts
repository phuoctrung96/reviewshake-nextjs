import styled, { css } from 'styled-components';
import BaseButton from '@/components/reusable/base-button/BaseButton';
import Logo from '@/components/reusable/logo/Logo';

export const StyledNavigation = styled.nav<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 9px 0 rgb(4 4 43 / 6%);
  border-radius: 0 0 15px 15px;
  z-index: 3;
  padding: 1.8125em 1.875em 0;
  animation: openMenuAnimation 0.3s ease;

  > ul {
    max-width: 350px;
    margin: 1em auto 0;
    padding: 0 0 1em;
    ul {
      padding: 0;
    }
    &:first-of-type {
      li {
        position: relative;
        list-style: none;
        a {
          justify-content: flex-start;
        }
      }
    }

    &:last-of-type {
      border-top: 1px solid ${({ theme }) => theme.colors.grayBorder};
      margin-top: 0;
      padding-top: 0.5em;
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: flex;
      align-items: center;
      position: static;
      background: transparent;
      box-shadow: none;
      padding: 0;
      width: auto;
      animation: none;

      > ul {
        max-width: unset;
        display: flex;
        margin-top: 0;
        margin-left: 2em;
        padding: 0;

        ul {
          padding: 1.5em;
        }

        > li {
          margin-left: 1.875em;
        }

        &:last-of-type {
          display: none;
        }
      }
    `)};

  @keyframes openMenuAnimation {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const StyledLogo = styled(Logo)`
  img {
    max-width: 170px;
  }

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: none;
    `)};
`;

export const StyledCloseButton = styled(BaseButton)`
  position: absolute;
  right: 35px;
  top: 45px;

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: none;
    `)};
`;
