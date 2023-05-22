import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div<{ $isActive: boolean }>`
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;

  > div:first-child {
    position: relative;
    height: 100%;

    img {
      object-fit: cover;
      height: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000009;
      opacity: 0.32;
    }

    button {
      position: absolute;
      height: 62px;
      width: 62px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      svg {
        margin: 0;
      }

      &:hover,
      &:focus {
        svg path {
          fill: #fff;
        }
      }
    }
  }

  > div:last-child {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    transition: left 0.3s linear 0s;
    z-index: 2;

    ${({ $isActive }) =>
      $isActive &&
      css`
        left: 0;
      `}

    > div {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      width: 100%;
      iframe {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
