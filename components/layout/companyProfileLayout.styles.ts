import styled, { css } from 'styled-components';
import { SummaryResType } from '@/types/companies';
import Card from '../reusable/card/Card';
import BaseLink from '../reusable/base-link/BaseLink';
import Container from '../reusable/container/Container';

export const StyledMainTitleDiv = styled.div`
  padding: 1.25em 0 2.5em;
  h1 {
    font-size: 2.4rem;
    line-height: 1.3333;
    margin-bottom: 0.2917em;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 1.5714em;
  }

  a {
    max-width: 100%;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: flex;
      align-items: center;
      gap: 4.6875em;

      p {
        margin-bottom: 0;
      }

      a {
        max-width: 234px;
        font-size: 1.6rem;
        padding-left: 0;
        padding-right: 0;
        margin: 0 0 0 auto;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      h1 {
        font-size: 3rem;
        margin-bottom: 0.2333em;
      }
      p {
        font-size: 1.7rem;
        max-width: 655px;
      }
    `)};
`;

export const StyledCompanyInfoDiv = styled.div<{ $summariesData: SummaryResType[] }>`
  display: grid;

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      grid-template-rows: 1fr;
      grid-gap: 0 1.875em;
      grid-template-rows: auto auto;
    `)};

  ${({ $summariesData }) =>
    $summariesData.length === 2 &&
    css`
      > div:nth-child(1) {
        order: 1;
      }
      > div:nth-child(2) {
        order: 3;
      }
      > div:nth-child(3) {
        order: 2;
      }
      > div:nth-child(4) {
        order: 4;
      }
      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          grid-template-columns: repeat(2, minmax(0, 1fr));
          > div:nth-child(1) {
            order: 1;
          }
          > div:nth-child(2) {
            order: 2;
          }
          > div:nth-child(3) {
            order: 3;
          }
          > div:nth-child(4) {
            order: 4;
          }
        `)};
    `}

  ${({ $summariesData }) =>
    $summariesData.length === 3 &&
    css`
      > div:nth-child(1) {
        order: 1;
      }
      > div:nth-child(2) {
        order: 3;
      }
      > div:nth-child(3) {
        order: 5;
      }
      > div:nth-child(4) {
        order: 2;
      }
      > div:nth-child(5) {
        order: 4;
      }
      > div:nth-child(6) {
        order: 6;
      }
      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          grid-template-columns: repeat(3, minmax(0, 1fr));
          > div:nth-child(1) {
            order: 1;
          }
          > div:nth-child(2) {
            order: 2;
          }
          > div:nth-child(3) {
            order: 3;
          }
          > div:nth-child(4) {
            order: 4;
          }
          > div:nth-child(5) {
            order: 5;
          }
          > div:nth-child(6) {
            order: 6;
          }
        `)};
    `}
`;

export const StyledTagWrDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  > div {
    margin-right: 10px;
  }
`;

export const StyledReviewSummaryWrCard = styled(Card)<{ $summariesData: SummaryResType[] }>`
  overflow: hidden;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      overflow: visible;
    `)};

  ${({ $summariesData }) =>
    $summariesData.length === 1 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          > div:last-child {
            > div:first-child {
              margin-bottom: 2.75em;
              > div {
                flex: 1 1 16%;
              }
            }
            > div:last-child {
              display: flex;
              justify-content: space-between;
              align-items: center;
              button {
                position: static;
              }
            }
          }
        `)};

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          display: flex;
          flex-direction: row;
          align-items: center;
          flex: 1 1 20%;
          hr {
            display: none;
          }
          > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            flex: 1 1 12%;
          }
          > div:last-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1 1 75%;
            > div:first-child {
              margin-bottom: 0;
              flex: 1 1 auto;
            }
            > div:last-child {
              flex-direction: column;
              button {
                margin-top: 0.7857em;
              }
            }
          }
        `)};
    `}

  ${({ $summariesData }) =>
    $summariesData.length === 2 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          > div:last-child {
            > div:first-child {
              margin-bottom: 2.75em;
              > div {
                flex: 1 1 16%;
              }
            }
            > div:last-child {
              display: flex;
              justify-content: space-between;
              align-items: center;
              button {
                position: static;
              }
            }
          }
        `)};

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          > div:last-child {
            > div:first-child {
              > div {
                flex: 1 1 30%;
              }
            }
          }
        `)};
    `}

    ${({ $summariesData }) =>
    $summariesData.length === 3 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          > div:last-child {
            > div:first-child {
              margin-bottom: 2.75em;
              > div {
                flex: 1 1 16%;
              }
            }
            > div:last-child {
              display: flex;
              justify-content: space-between;
              align-items: center;
              button {
                position: static;
              }
            }
          }
        `)};

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          > div:last-child {
            > div:first-child {
              > div {
                flex: 1 1 30%;
              }
            }
          }
        `)};
    `}
`;

export const StyledWorldMapWrCard = styled(Card)`
  padding: 5% 2%;
  img {
    width: 100%;
  }
  a {
    background-color: #fff;
    border-color: ${({ theme }) => theme.colors.black};
    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const StyledAboutDataWr = styled.div`
  background-color: #e3e3e3;
  padding: 1.4375em 1em 1.8125em;
  border-radius: 6px;
  margin-bottom: 1.25em;
  h2 {
    line-height: 1.35;
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
    em {
      font-size: 1.4rem;
      line-height: 1.9286;
      color: #66717e;
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 2.75em 1.5em;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      padding: 44px 24px;
    `)};
`;

export const StyledSignUpBaseLinkBtn = styled(BaseLink)`
  display: inline-block;
  text-align: center;
  max-width: 300px;
  width: 100%;
  margin-top: 0.4444em;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: auto;
    `)};
`;

export const StyledGainDeeperInsightsBtn = styled(BaseLink)`
  width: 100%;
`;

export const StyledCompetitorsWr = styled.div`
  background-color: #fff;
  padding: 3.75em 0 0;
  h2 {
    text-align: left;
    margin-bottom: 0.2885em;
  }
  p {
    font-size: 2.2rem;
    line-height: 1.2273;
    color: #2b2b59;
    margin-bottom: 3.1818em;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      p {
        padding-right: 20%;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      padding: 6.25em 0;

      p {
        padding-right: 40%;
      }
    `)};
`;

export const StyledCompanyProfileReviewsWr = styled(Card)<{ $summariesData: SummaryResType[] }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em 1em 0;
  justify-content: flex-start;

  > section {
    padding-bottom: 1.5625em;

    > div {
      padding: 0;
    }

    &:nth-child(1) {
      border-bottom: 1px solid #dfdfdf;
      margin-bottom: 1em;
    }
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5),
    &:nth-child(6) {
      display: none;
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 1.5625em 1.5625em 0.5625em;
      justify-content: space-between;

      > section {
        padding-left: 0;
        padding-right: 0;
        flex: 0 1 48%;
        &:nth-child(1),
        &:nth-child(2) {
          border-bottom: 1px solid #dfdfdf;
          margin-bottom: 1.5625em;
        }
        &:nth-child(3),
        &:nth-child(4) {
          display: block;
        }
      }
    `)};

  ${({ $summariesData }) =>
    $summariesData.length === 1 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          > section {
            flex: 0 1 32%;
          }
          > section:nth-child(3) {
            margin-bottom: 1.5625em;
            border-bottom: 1px solid #dfdfdf;
          }
          > section:nth-child(5),
          > section:nth-child(6) {
            display: block;
          }
        `)};
    `}

  ${({ $summariesData }) =>
    $summariesData.length === 2 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          > section {
            flex: 1 1 100%;
            &:nth-child(2) {
              border-bottom: none;
            }

            &:nth-child(3),
            &:nth-child(4) {
              display: none;
            }
          }
        `)};
    `}

    ${({ $summariesData }) =>
    $summariesData.length === 3 &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          > section {
            flex: 1 1 100%;
            &:nth-child(2) {
              border-bottom: none;
            }

            &:nth-child(3),
            &:nth-child(4) {
              display: none;
            }

            > div {
              &:first-child {
                gap: 0.75em;
              }
            }
          }
        `)};
    `}
`;

export const StyledWordCloudCardWr = styled(Card)`
  overflow: hidden;
`;

export const StyledWordCloudSectionWr = styled(Container)`
  padding-top: 3.75em;

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      padding-top: 6.25em;
    `)};
`;

export const StyledCompanyProfileBottomWr = styled.div<{ $summariesData: SummaryResType[] }>`
  display: grid;

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      grid-template-rows: 1fr;
      grid-gap: 0 1.875em;
      grid-template-rows: auto auto;
    `)};

  ${({ $summariesData }) =>
    $summariesData.length === 2 &&
    css`
      > div:nth-child(1) {
        order: 1;
      }
      > div:nth-child(2) {
        order: 3;
      }
      > div:nth-child(3) {
        order: 2;
      }
      > div:nth-child(4) {
        order: 4;
      }

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          grid-template-columns: repeat(2, minmax(0, 1fr));
          > div:nth-child(1) {
            order: 1;
          }
          > div:nth-child(2) {
            order: 2;
          }
          > div:nth-child(3) {
            order: 3;
          }
          > div:nth-child(4) {
            order: 4;
          }
        `)};
    `}

  ${({ $summariesData }) =>
    $summariesData.length === 3 &&
    css`
      > div:nth-child(1) {
        order: 1;
      }
      > div:nth-child(2) {
        order: 3;
      }
      > div:nth-child(3) {
        order: 5;
      }
      > div:nth-child(4) {
        order: 2;
      }
      > div:nth-child(5) {
        order: 4;
      }
      > div:nth-child(6) {
        order: 6;
      }

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          grid-template-columns: repeat(3, minmax(0, 1fr));
          > div:nth-child(1) {
            order: 1;
          }
          > div:nth-child(2) {
            order: 2;
          }
          > div:nth-child(3) {
            order: 3;
          }
          > div:nth-child(4) {
            order: 4;
          }
          > div:nth-child(5) {
            order: 5;
          }
          > div:nth-child(6) {
            order: 6;
          }
        `)};
    `}
`;

export const StyledCompanyInfoTag = styled.span`
  background-color: #dbdae2;
  font-size: 1.4rem;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0.4286em 1em;
  border-radius: 50px;
  max-width: 161px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
