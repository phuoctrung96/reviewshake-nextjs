import styled, { css } from 'styled-components';
import { FrameVariant } from './ImageWithFrame';

export const StyledImageWithFrame = styled.div<{ $frameVariant: FrameVariant }>`
  position: relative;
  width: fit-content;
  margin: 0 auto;

  img {
    z-index: 1;
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
  }

  ${({ $frameVariant }) =>
    $frameVariant === 'primary' &&
    css`
      img {
        border-radius: 12px;
      }

      &:after {
        border: 1px solid #000;
        right: -10px;
        top: -10px;
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }
    `}

  ${({ $frameVariant }) =>
    $frameVariant === 'secondary' &&
    css`
      img {
        border-radius: 6px;
      }

      &:after {
        background-color: ${({ theme }) => theme.colors.green};
        border-radius: 6px;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
      }
    `}
`;
