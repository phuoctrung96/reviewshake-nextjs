import styled, { css } from 'styled-components';
import BaseLink from '../base-link/BaseLink';

export const StyledBlurLinkWr = styled.div<{ $blurValue: number }>`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${({ $blurValue }) =>
    $blurValue === 3 &&
    css`
      backdrop-filter: blur(3px);
    `}

  ${({ $blurValue }) =>
    $blurValue === 6 &&
    css`
      backdrop-filter: blur(6px);
    `}

    ${({ $blurValue }) =>
    $blurValue === 7 &&
    css`
      backdrop-filter: blur(7px);
    `}
`;

export const StyledBaseLink = styled(BaseLink)`
  height: 51px;
  padding: 0 36px;
  max-width: unset;
  width: max-content;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
