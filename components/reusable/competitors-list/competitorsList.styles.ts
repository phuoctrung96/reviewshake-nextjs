import styled, { css } from 'styled-components';
import ClearbitImage from '../clearbit-image/ClearbitImage';
import StarsRating from '../stars-rating/StarsRating';

export const StyledCompetitorsOuterWr = styled.div`
  position: relative;
`;

export const StyledCompetitorsListWr = styled.div`
  overflow-x: auto;
  table {
    width: 100%;
    border-spacing: 0;
    thead {
      tr {
        text-align: left;
        color: #66717e;
        th {
          padding: 12px 0;
          border-bottom: 1px solid #d9d9d9;
          font-weight: 400;
        }
      }
    }
    tr {
      &:last-child td {
        border-bottom: none;
      }
    }
    td {
      padding: 14px 0;
      border-bottom: 1px solid #d9d9d9;

      > div {
        align-items: center;
      }
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      table {
        td {
          > div {
            display: inline-flex;
          }
        }
      }
    `)};
`;

export const StyledMobileOnlySpan = styled.span`
  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      display: none;
    `)};
`;

export const StyledDesktopOnlySpan = styled.span`
  display: none;
  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      display: table-cell;
    `)};
`;

export const StyledCompetitorColumnTh = styled.th<{ $colMobile: string }>`
  ${({ $colMobile }) =>
    $colMobile === 'Category' &&
    css`
      display: none;
      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          display: table-cell;
        `)};
    `}
`;

export const StyledCompetitorSiteTd = styled.td`
  width: 100%;

  a {
    display: inline-flex;
    align-items: center;
    > div {
      flex: 0 0 26px;
    }
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
  span {
    word-break: break-word;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: auto;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      width: auto;
      span {
        display: inline;
      }
    `)};
`;

export const StyledCompetitorReviewsTd = styled.td`
  padding-left: 12px;
  padding-right: 12px;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding-left: 0;
      padding-right: 0;
    `)};
`;

export const StyledCompetitorRatingTd = styled.td`
  padding-left: 12px;
  padding-right: 12px;
  font-weight: 600;
  > div {
    margin-left: 0.764375em;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding-left: 0;
      padding-right: 0;
    `)};
`;

export const StyledCompetitorRankTd = styled.td`
  padding-left: 12px;
  padding-right: 12px;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding-left: 0;
      padding-right: 0;
    `)};
`;

export const StyledCompetitorCategoryTd = styled.td`
  display: none;
  padding-left: 12px;
  padding-right: 12px;
  color: ${({ theme }) => theme.colors.darkBlue};

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding-left: 0;
      padding-right: 0;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      display: table-cell;
    `)};
`;

export const StyledCompetitorSiteLogo = styled(ClearbitImage)`
  margin-right: 0.75em;
`;

export const StyledCompetitorCTADiv = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  min-height: 250px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.57) 34.37%,
    #ffffff 83.83%
  );
  display: flex;
  align-items: center;
`;

export const StyledCompetitorStarsRating = styled(StarsRating)`
  display: none;
  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      display: table-cell;
    `)};
`;
