import styled, { css } from 'styled-components';
import Decorator from '@/components/reusable/decorator/Decorator';

export const StyledDecorator = styled(Decorator)`
  &:before {
    top: -60px;
    left: 50%;
    transform: translateX(-175px);
    width: 40px;
    height: 100px;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      &:before {
        top: -60px;
        left: 35px;
        width: 50px;
        height: 100px;
        transform: translateX(0);
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(
      css`
        &:before {
          display: none;
        }
      `
    )};
`;

export const StyledIconsDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  svg {
    opacity: 0.2;
    position: absolute;

    &:nth-child(1) {
      top: -25%;
      right: 35%;
      transform: translateX(-50%);
    }
    &:nth-child(2) {
      top: -12%;
      right: 12%;
    }
    &:nth-child(3) {
      top: 44%;
      right: 17%;
    }
    &:nth-child(4) {
      top: 70%;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(5) {
      top: 50%;
      left: 17%;
    }
    &:nth-child(6) {
      top: -12%;
      left: 18%;
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      svg {
        &:nth-child(1) {
          top: -0%;
          right: 8%;
        }
        &:nth-child(2) {
          top: 25%;
          right: -15%;
        }
        &:nth-child(3) {
          top: 64%;
          right: -15%;
        }
        &:nth-child(4) {
          bottom: 10%;
          right: 25%;
          top: unset;
          left: unset;
          transform: none;
        }
        &:nth-child(5) {
          top: 60%;
          left: 42%;
        }
        &:nth-child(6) {
          top: 15%;
          left: 42%;
        }
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      svg {
        &:nth-child(2) {
          right: -10%;
        }
        &:nth-child(3) {
          right: -10%;
        }
        &:nth-child(4) {
          right: 15%;
        }
        &:nth-child(5) {
          left: 52%;
        }
        &:nth-child(6) {
          top: 19%;
          left: 53%;
        }
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      svg {
        width: 50px;
        &:nth-child(1) {
          top: -50%;
          right: 36%;
        }
        &:nth-child(2) {
          top: -15%;
          right: 20%;
        }
        &:nth-child(3) {
          right: 20%;
          bottom: -15%;
          top: unset;
        }
        &:nth-child(4) {
          right: 44%;
          bottom: -45%;
        }
        &:nth-child(5) {
          bottom: -25%;
          top: unset;
          left: 22%;
        }
        &:nth-child(6) {
          top: -25%;
          left: 25%;
        }
      }
    `)};
`;

export const StyledBackgroundDiv = styled.div`
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding-left: 1.875em;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      position: relative;
      &:before,
      &:after {
        display: block;
        position: absolute;
        content: '';
        background: url('/assets/images/decorators/bg-circle.svg') no-repeat;
        z-index: 2;
      }
      &:before {
        top: -50px;
        right: -70px;
        width: 230px;
        height: 230px;
      }
      &:after {
        bottom: -30px;
        left: -70px;
        width: 255px;
        height: 255px;
      }
    `)};
`;
