import styled, { css } from 'styled-components';

export const StyledPrimaryLoaderDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 8px;
    background: ${({ theme }) => theme.colors.black};
    animation: loaderPrimary 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    opacity: 0.5;
    &:nth-child(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    &:nth-child(2) {
      left: 24px;
      animation-delay: -0.12s;
    }
    &:nth-child(3) {
      left: 40px;
      animation-delay: 0;
    }
  }

  @keyframes loaderPrimary {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export const StyledSecondaryLoaderDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 20px;
  height: 20px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
    animation: loaderSecondary 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ theme }) => theme.colors.black} transparent transparent transparent;
    &:nth-child(1) {
      animation-delay: -0.45s;
    }
    &:nth-child(2) {
      animation-delay: -0.3s;
    }
    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }

  @keyframes loaderSecondary {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
