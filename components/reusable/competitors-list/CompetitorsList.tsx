import React from 'react';
import Link from 'next/link';
import { Skeleton, Stack } from '@mui/material';
import { CompetitorsResultsType } from '@/types/companies';
import useCompanies from '@/providers/CompaniesProvider';
import StarsRating from '../stars-rating/StarsRating';
import BaseLink from '../base-link/BaseLink';
import {
  StyledCompetitorsOuterWr,
  StyledCompetitorsListWr,
  StyledMobileOnlySpan,
  StyledDesktopOnlySpan,
  StyledCompetitorSiteTd,
  StyledCompetitorReviewsTd,
  StyledCompetitorRatingTd,
  StyledCompetitorSiteLogo,
  StyledCompetitorCTADiv,
  StyledCompetitorRankTd,
  StyledCompetitorCategoryTd,
  StyledCompetitorStarsRating,
  StyledCompetitorColumnTh,
} from './competitorsList.styles';
import { shortenNumber } from '@/utils/formatNumber';

const COLS = [
  { mobile: 'Company', desktop: 'Company' },
  { mobile: 'R. Vol', desktop: 'Review volume' },
  { mobile: 'Avg R.', desktop: 'Average rating' },
  { mobile: 'Category', desktop: 'Category' },
  { mobile: 'Rank', desktop: 'Rank' },
];

const ROWS: CompetitorsResultsType[] = [
  {
    url: 'alexa.com',
    name: 'alexa.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'semrush.com',
    name: 'semrush.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'ahrefs.com',
    name: 'ahrefs.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'siteslike.com',
    name: 'siteslike.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'moz.com',
    name: 'moz.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'spyfu.com',
    name: 'spyfu.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'hotjar.com',
    name: 'hotjar.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'blackhatworld.com',
    name: 'blackhatworld.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'hubspot.com',
    name: 'hubspot.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
  {
    url: 'searchenginejournal.com',
    name: 'searchenginejournal.com',
    number_of_reviews: 122365,
    average_rating: 4.6,
    industry: 'Business and Consumer Services',
    rank: 381,
  },
];

const CompetitorsList = () => {
  const { competitorsData } = useCompanies();
  const rowData = competitorsData[0]?.success ? competitorsData[0].results : ROWS;

  return (
    <StyledCompetitorsOuterWr>
      <StyledCompetitorsListWr>
        {competitorsData[0]?.loading ? (
          <Stack spacing={1} marginTop={1}>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} variant="text" width="100%" animation="wave" height={30} />
              ))}
          </Stack>
        ) : (
          <table>
            <thead>
              <tr>
                {COLS.map((col, index) => (
                  <StyledCompetitorColumnTh key={index} $colMobile={col.mobile}>
                    <StyledMobileOnlySpan>{col.mobile}</StyledMobileOnlySpan>
                    <StyledDesktopOnlySpan>{col.desktop}</StyledDesktopOnlySpan>
                  </StyledCompetitorColumnTh>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row, index) => (
                <tr key={index}>
                  <StyledCompetitorSiteTd>
                    {row.tag ? (
                      <div>
                        <Link href={`/reviews/${row.tag}`} passHref>
                          <StyledCompetitorSiteLogo url={row.url || ''} width={26} />
                          <span>{row.name}</span>
                        </Link>
                      </div>
                    ) : (
                      <div>
                        <StyledCompetitorSiteLogo url={row.url || ''} width={26} />
                        <span>{row.name}</span>
                      </div>
                    )}
                  </StyledCompetitorSiteTd>
                  <StyledCompetitorReviewsTd>
                    {shortenNumber(row.number_of_reviews, 1000)}
                  </StyledCompetitorReviewsTd>
                  <StyledCompetitorRatingTd>
                    {row.average_rating}
                    <StyledCompetitorStarsRating rating={row.average_rating} />
                  </StyledCompetitorRatingTd>
                  <StyledCompetitorCategoryTd>{row.industry}</StyledCompetitorCategoryTd>
                  <StyledCompetitorRankTd>{`#${row.rank}`}</StyledCompetitorRankTd>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!competitorsData[0].success && (
          <StyledCompetitorCTADiv>
            <BaseLink href="/contact-us">Get full access</BaseLink>
          </StyledCompetitorCTADiv>
        )}
      </StyledCompetitorsListWr>
    </StyledCompetitorsOuterWr>
  );
};

export default CompetitorsList;
