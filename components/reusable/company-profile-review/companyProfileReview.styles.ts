import styled, { css } from 'styled-components';
import ReadMore from '../read-more/ReadMore';

export const StyledCompanyProfileReviewWr = styled.section`
  adding: 1em 0 0;
  width: 100%;
  max-width: 550px;
`;

export const StyledCompanyProfileReviewHeader = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 28px;
`;

export const StyledCompanyProfileReviewAvatar = styled.div`
  width: 48px;
  height: 48px;
  background-color: #eaeaea;
  border-radius: 6px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.35;
`;

export const StyledCompanyProfileReviewData = styled.div`
  overflow: hidden;
  h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 1.6rem;
    line-height: 1.35;
    margin-bottom: 0.28125em;
  }
`;

export const StyledCompanyReviewRatingWr = styled.div`
  display: flex;
  align-items: CENTER;
  p {
    font-size: 1.4rem;
    margin: 0 0 0 1.29em;
    color: #70737d;
  }
`;

export const StyledCompanyReviewContent = styled.div`
  margin-top: 1.25em;
  padding-bottom: 1em;
`;

export const StyledCompanyReviewReadMore = styled(ReadMore)`
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  strong {
    font-weight: 600;
    font-size: 1.6rem;
  }
  &:nth-child(3) {
    margin-top: 1.25em;
  }
  button {
    font-size: 1.5rem;
    line-height: 1.5;
  }
`;
