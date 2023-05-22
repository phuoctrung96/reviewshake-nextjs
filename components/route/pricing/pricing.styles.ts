import styled, { css } from 'styled-components';
import Decorator from '@/components/reusable/decorator/Decorator';
import ArrowButtonDown from '@/components/reusable/icons/ArrowButtonDown';
import Flex from '@/components/reusable/flex/Flex';
import Link from 'next/link';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import theme from '@/styled/theme.styles';

export const StyledDecorator1 = styled(Decorator)`
  &:before {
    top: -50px;
    left: 3%;
    width: 40px;
    height: 50px;

    ${({ theme }) =>
      theme.mediaQueries('md')(css`
        left: 0;
        width: 55px;
        height: 65px;
      `)};

    ${({ theme }) =>
      theme.mediaQueries('lg')(css`
        top: 30px;
        width: 90px;
        height: 120px;
      `)};
  }
`;

export const StyledDecorator2 = styled(Decorator)`
  &:before {
    display: none;

    ${({ theme }) =>
      theme.mediaQueries('lg')(css`
        display: block;
        top: 0;
        right: 30px;
        width: 85px;
        height: 120px;
      `)};
  }
`;

export const StyledOptionDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  svg {
    margin-right: 7px;
    width: 22px;
    path {
      stroke: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const StyledArrowButtonDownIcon = styled(ArrowButtonDown)`
  width: 9px;
  margin-right: 18px;
`;

export const StyledLink = styled(Link)<{ className?: string }>`
  border: none;
  background: none;
  display: flex;
  font-size: 1.6rem;
  line-height: 2.16rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  font-family: 'GalanoGrotesque', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  position: relative;
  cursor: pointer;
  max-width: 325px;
  flex: 1 1 33%;
  padding: 3rem 0;
  border-radius: 6px;

  svg {
    width: 2.2rem;
    margin-right: 2rem;
    path {
      stroke: #6d696a;
    }
  }

  &:after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: -18px;
    border-radius: 30px;
    transition: background-color 250ms ease-in-out;
    z-index: 1;
  }

  &:hover,
  &:focus {
    &:after {
      background-color: #25e85f;
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
  }

  ${({ className }) =>
    className === 'selected' && {
      backgroundColor: '#e0f3e4',

      '&:after': {
        backgroundColor: '#25e85f',
        transform: 'matrix(1, 0, 0, -1, 0, 0)',
      },

      'svg path': {
        stroke: theme.colors.green,
      },
    }}

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      font-size: 2rem;
      line-height: 2.9rem;
      padding: 3.3rem 0;

      svg {
        width: 2.8rem;
      }
    `)};
`;

export const StyledButtonFlex = styled(Flex)`
  display: none;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: flex;
      justify-content: center;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #e0e0e0;
        bottom: -18px;
        border-radius: 30px;
        transition: background-color 250ms ease-in-out;
      }
    `)};
`;

export const StyledUl = styled.ul`
  padding: 0;
`;

export const StyledBaseLink = styled(BaseLink)`
  color: ${({ theme }) => theme.colors.blue};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 60px;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const StyledFormWrapper = styled(Flex)`
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      button {
        grid-column: 1/3;
        max-width: 300px;
        width: 100%;
        margin: 0 auto;
      }
    `)};
`;
