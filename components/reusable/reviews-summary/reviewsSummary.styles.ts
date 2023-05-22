import styled, { css } from 'styled-components';

export const StyledReviewsSummaryWr = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: 5.2rem;
    line-height: 1.35;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-right: 0.2em;
    width: 100%;
    max-width: 80px;
  }
  p {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const StyledReviewsSummaryContent = styled.div`
  margin-top: 0.5em;
`;

export const StyledReviewsCountP = styled.p`
  margin-top: 0.5625em;
  line-height: 1.35;
  strong {
    font-weight: 600;
  }
`;
