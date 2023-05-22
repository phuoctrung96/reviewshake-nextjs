import styled, { css } from 'styled-components';
import Link from 'next/link';
import Container from '../container/Container';
import ClearbitImage from '../clearbit-image/ClearbitImage';

export const StyledComparisonWrDiv = styled.div`
  background: #ffffff;
  box-shadow: 2px 3px 5px rgba(0, 0, 9, 0.02);
  margin-bottom: 1.3125em;
`;

export const StyledComparisonContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 1.0625em;
  padding-bottom: 1.0625em;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      flex-direction: row;
      align-items: center;
    `)};
`;

export const StyledSingleCompanyDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.0625em;
  min-height: 1.625em;

  &:first-child {
    margin-left: 0;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 0;
      min-height: 2.25em;
    `)};
`;

export const StyledClearbitImage = styled(ClearbitImage)`
  margin-right: 0.5em !important;
  max-width: 26px;
`;

export const StyledLink = styled(Link)`
  width: 10px;
  height: 10px;
  margin-left: 0.5em;
  path {
    fill: #66717e;
    transition: fill 250ms ease-in-out;
  }

  &:focus,
  &:hover {
    path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const StyledVSDiv = styled.div`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 1.5em;
`;

export const StyledCompanySearchWrDiv = styled.div`
  position: relative;
  width: 100%;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: auto;
    `)};
`;

export const StyledAddToCompareTriggerBtn = styled.button`
  background-color: #fff;
  color: #66717e;
  display: inline-flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 1.35;
  border: dashed 1px #66717e;
  border-radius: 6px;
  padding: 0.5333em 0.8em;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  svg {
    margin-right: 0.8em;
    path {
      transition: fill 250ms ease-in-out;
    }
  }
  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    path {
      fill: ${({ theme }) => theme.colors.black};
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding-top: 0;
      padding-bottom: 0;
      min-height: 2.4em;
    `)};
`;
