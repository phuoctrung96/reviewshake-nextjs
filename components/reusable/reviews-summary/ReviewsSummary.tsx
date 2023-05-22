import React from 'react';
import {
  StyledReviewsSummaryWr,
  StyledReviewsSummaryContent,
  StyledReviewsCountP,
} from './reviewsSummary.styles';
import { shortenNumber } from '@/utils/formatNumber';
import StarsRating from '../stars-rating/StarsRating';

type ReviewsSummaryType = {
  rating: number;
  reviewsTotalCount: number;
};

const ReviewsSummary = ({ rating, reviewsTotalCount }: ReviewsSummaryType) => {
  return (
    <StyledReviewsSummaryWr>
      <h2>{rating}</h2>
      <StyledReviewsSummaryContent>
        <StarsRating rating={rating} color={'yellow'}/>
        <StyledReviewsCountP>
          Based on <strong>{shortenNumber(reviewsTotalCount, 1000)} reviews</strong>
        </StyledReviewsCountP>
      </StyledReviewsSummaryContent>
    </StyledReviewsSummaryWr>
  );
};

export default ReviewsSummary;
