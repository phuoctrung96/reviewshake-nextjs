import React from 'react';
import {
  StyledCompanyProfileReviewWr,
  StyledCompanyProfileReviewHeader,
  StyledCompanyProfileReviewAvatar,
  StyledCompanyProfileReviewData,
  StyledCompanyReviewRatingWr,
  StyledCompanyReviewContent,
  StyledCompanyReviewReadMore,
} from './companyProfileReview.styles';
import StarsRating from '../stars-rating/StarsRating';
import { formatDate } from '@/utils/formatDate';

type CompanyReviewType = {
  title: string;
  rating: number;
  date: string;
  content: string;
};

const CompanyProfileReview = ({ title, rating, date, content }: CompanyReviewType) => {
  return (
    <StyledCompanyProfileReviewWr>
      <StyledCompanyProfileReviewHeader>
        <StyledCompanyProfileReviewAvatar>{title.charAt(0)}</StyledCompanyProfileReviewAvatar>
        <StyledCompanyProfileReviewData>
          <h2>{title}</h2>
          <StyledCompanyReviewRatingWr>
            <StarsRating rating={rating} color={'yellow'}/>
            <p>{formatDate(new Date(date))}</p>
          </StyledCompanyReviewRatingWr>
        </StyledCompanyProfileReviewData>
      </StyledCompanyProfileReviewHeader>
      <StyledCompanyReviewContent>
        {
          <StyledCompanyReviewReadMore countOfCharacters={200}>
            {content}
          </StyledCompanyReviewReadMore>
        }
      </StyledCompanyReviewContent>
    </StyledCompanyProfileReviewWr>
  );
};

export default CompanyProfileReview;
