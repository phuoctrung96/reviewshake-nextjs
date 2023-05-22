import styled, { css } from 'styled-components';
import QuotationMarks from '@/components/reusable/icons/QuotationMarks';
import ReviewedOn from '@/components/reusable/reviewed-on/ReviewedOn';

export const StyledDiv = styled.div`
  background-color: #fff;
  padding: 0 38px 20px 20px;
  border: 1px solid #e7e7ef;
  box-shadow: 4px 4px 10px rgba(0, 0, 9, 0.02);
  border-radius: 6px;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 0 27px 26px 155px;
      position: relative;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      padding: 0 30px 23px 217px;
    `)};
`;

export const StyledQuotationMarks = styled(QuotationMarks)`
  width: 52px;
  position: relative;
  top: -10px;
  left: 0;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      position: absolute;
      width: 103px;
      top: -24px;
      left: 26px;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      width: 129px;
      left: 46px;
    `)};
`;

export const StyledReviewedOn = styled(ReviewedOn)`
  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      position: absolute;
      bottom: 26px;
      right: 27px;
    `)};
`;
