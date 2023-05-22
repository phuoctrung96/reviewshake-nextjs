import styled, { css } from 'styled-components';
import { typography } from 'styled-system';

type DisplayOnType = { $displayOn?: 'mobile' | 'tablet-up' };

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 60px;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const StyledTh = styled.th<DisplayOnType>`
  background-color: #f0f0f0;
  border-radius: 6px;
  padding: 12px 16px;
  text-align: left;

  ${({ $displayOn }) =>
    $displayOn === 'mobile' &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          display: none;
        `)};
    `}
  ${({ $displayOn }) =>
    $displayOn === 'tablet-up' &&
    css`
      display: none;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          display: table-cell;
          font-size: 1.8rem;
          padding: 19px 24px;
        `)};
    `}
`;

export const StyledShortTitleTh = styled.th`
  &:nth-child(2) {
    padding: 0 5px 18px 0;
  }
  &:nth-child(3) {
    padding: 0 5px 18px;
  }
  &:nth-child(4) {
    padding: 0 0 18px 5px;
  }
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      font-size: 2.2rem;
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        padding: 0 1.5rem 2.4rem;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      font-size: 2.6rem;
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        padding: 0 4rem 1.6rem;
      }
    `)};
`;

export const StyledCtaTh = styled.th`
  a {
    width: 100%;
  }
  &:nth-child(2) {
    padding: 0 0.5rem 2.4rem 0;
  }
  &:nth-child(3) {
    padding: 0 0.5rem 2.4rem;
  }
  &:nth-child(4) {
    padding: 0 0 2.4rem 0.5rem;
  }
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        padding: 0 1.5rem 2.4rem;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      a {
        font-size: 1.8rem;
      }
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        padding: 0 40px 28px;
      }
    `)};
`;

export const StyledSectionTableHeading = styled.td`
  padding: 10px 0 6px 16px;
  color: ${({ theme }) => theme.colors.grayDarkText};
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 2.7rem;
`;

export const StyledTableValueRow = styled.td<
  { $fontSize?: string; $sectionLastRow?: boolean; $sectionFirstRow?: boolean } & DisplayOnType
>`
  text-align: center;
  font-size: 1.6rem;
  line-height: 2.7rem;
  padding-bottom: 10px;
  position: relative;

  ${({ $fontSize }) => $fontSize && `font-size: ${$fontSize};`}

  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    position: absolute;
    left: 0;
    bottom: 0;
    ${({ $sectionLastRow }) => $sectionLastRow && `display: none;`}
  }

  &:first-child {
    &:after {
      left: 16px;
    }
  }

  svg {
    margin: 0 auto;
    padding-bottom: 3px;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 1.4rem 1.5rem 1.4rem 1.5rem;
      &:nth-child(2) {
      }
      &:nth-child(3) {
      }
      &:nth-child(4) {
      }
    `)};

  ${({ $displayOn }) =>
    $displayOn === 'mobile' &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          display: none;
        `)};
    `};

  ${({ $displayOn }) =>
    $displayOn === 'tablet-up' &&
    css`
      display: none;
      color: ${({ theme }) => theme.colors.grayDarkText};

      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          display: table-cell;
          text-align: left;
          padding: 1.4rem 1rem 1.4rem 1.6rem;
        `)};
    `}

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 1.4rem 1rem 1.4rem 1rem;
      &:first-of-type {
        padding-left: 2.4rem;
      }
      &:after {
        display: none;
      }
    `)};

  ${({ $sectionFirstRow }) =>
    $sectionFirstRow &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          padding-top: 2.4rem;
        `)};
    `}

  ${({ $sectionLastRow }) =>
    $sectionLastRow &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          padding-bottom: 2.4rem;
        `)};
    `}
  
  ${typography};
`;

export const SeparatorTh = styled.th`
  display: none;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: table-cell;
      width: 35%;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      width: 40%;
    `)};
`;

export const RowTitleTr = styled.tr`
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: none;
    `)};
`;
