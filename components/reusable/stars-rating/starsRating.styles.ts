import styled, { css } from 'styled-components';

export const StyledDiv = styled.div<{ $color?: string }>`
  display: flex;
  position: relative;
  width: auto;
  align-items: flex-start;
  height: 100%;

  ${({ $color }) =>
    $color === 'yellow' &&
    css`
      svg {
        width: 16px;
        height: 16px;
        fill: #ffa630;
      }
    `}

  ${({ $color }) =>
    $color !== 'yellow' &&
    css`
      svg {
        width: 16px;
        height: 16px;
        fill: ${({ theme }) => theme.colors.green};
      }
    `}

  > div {
    &:first-child,
    &:last-child {
      display: flex;

      > div {
        margin-right: 2px;
        position: relative;
        width: 16px;
        height: 16px;
      }
    }

    &:last-child {
      position: absolute;
      svg {
        position: absolute;
      }
    }
  }
`;
