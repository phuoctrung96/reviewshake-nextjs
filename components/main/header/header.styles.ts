import styled, { css } from 'styled-components';
import BaseButton from '@/components/reusable/base-button/BaseButton';

export const StyledHeader = styled.header<{ $companyReviewsPage: boolean }>`
  position: absolute;
  display: block;
  width: 100%;
  top: 0;
  z-index: 3;
  ${({ $companyReviewsPage }) =>
    $companyReviewsPage === true &&
    css`
      padding: 16px 0 16px;
      background-color: ${({ theme }) => theme.colors.white};
      border-bottom: 1px solid #dfdfdf;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          padding-top: 16px;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          padding-top: 16px;
        `)};
    `}

  ${({ $companyReviewsPage }) =>
    $companyReviewsPage === false &&
    css`
      background-color: transparent;
      padding: 52px 0 30px;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          padding-top: 46px;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          padding-top: 38px;
        `)};
    `}
`;

export const StyledButton = styled(BaseButton)`
  margin-left: auto;

  ${({ theme }) =>
    theme.mediaQueries('xl')(css`
      display: none !important;
    `)};
`;
