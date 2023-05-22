import styled, { css } from 'styled-components';

export const StyledSwitchDiv = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  &:after {
    background-color: ${({ theme }) => theme.colors.green};
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      &:after {
        content: 'Save up to 20%';
        position: absolute;
        right: -40%;
        bottom: -70%;
        color: #fff;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.9rem;
        padding: 0.4rem 1.2rem;
        transform: rotate(-13.63deg);
        border-radius: 6px;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      &:after {
        right: -30%;
        bottom: -85%;
      }
    `)};
`;

export const StyledSwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  + label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 58px;
    height: 32px;
    background: ${({ theme }) => theme.colors.grayDarkText};
    border-radius: 32px;
    position: relative;
    transition: background-color 0.2s;

    span {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 26px;
      height: 26px;
      border-radius: 26px;
      transition: 0.2s;
      background: #fff;
      box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    }
  }

  &:checked {
    + label {
      background: ${({ theme }) => theme.colors.green};
      span {
        left: calc(100% - 3px);
        transform: translateX(-100%);
      }
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
    + label {
      width: 68px;
      height: 37px;
      border-radius: 37px;

      span {
        width: 31px;
        height: 31px;
        border-radius: 31px;
      }
  `)};
`;
