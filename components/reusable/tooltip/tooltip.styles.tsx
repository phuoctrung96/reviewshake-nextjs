import styled, { css } from 'styled-components';

export const StyledTooltipWrDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;

  > div {
    &:last-of-type {
      position: absolute;
      padding: 0 1.0769em;
      background-color: #fff;
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 2.3846;
      color: ${({ theme }) => theme.colors.darkBlue};
      white-space: nowrap;
      border: 1px solid ${({ theme }) => theme.colors.darkBlue};
      border-radius: 2px;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      &:after {
        content: '';
        width: 5px;
        height: 5px;
        position: absolute;
        border: solid ${({ theme }) => theme.colors.darkBlue};
        border-width: 1px 1px 0 0;
        background-color: #fff;
        top: -4px;
        left: 50%;
        bottom: auto;
        transform: translateX(-50%) rotate(315deg);
      }
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: auto;
      justify-content: flex-start;
      > div {
        &:last-of-type {
          top: 50%;
          left: calc(100% + 13px);
          transform: translate(0, -50%);
          &:after {
            top: 50%;
            left: -3.5px;
            right: auto;
            transform: translateY(-50%) rotate(225deg);
          }
        }
      }
    `)};
`;
