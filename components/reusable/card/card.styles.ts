import styled, { css } from 'styled-components';
import { BorderColor } from './Card';
import ClearbitImage from '../clearbit-image/ClearbitImage';
import ReadMore from '../read-more/ReadMore';

export const StyledCardWrDiv = styled.div<{ $borderColor?: BorderColor }>`
  border-radius: 6px;
  box-shadow: 2px 3px 5px rgba(0, 0, 9, 0.02);
  border: 2px solid #dfdfdf;
  background: #ffffff;
  padding: 1em;
  margin-bottom: 1.25em;
  position: relative;

  hr {
    border-top: 1px solid #dfdfdf;
    margin: 1.6rem 0;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      padding: 1.5625em 1em;
      margin-bottom: 1.875em;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      padding: 1.5em;
      hr {
        margin-bottom: 1.5em;
      }
    `)};

  ${({ $borderColor }) =>
    $borderColor === 'blue' &&
    css`
      border-color: ${({ theme }) => theme.colors.blue};
    `}

  ${({ $borderColor }) =>
    $borderColor === 'red' &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

    ${({ $borderColor }) =>
    $borderColor === 'orange' &&
    css`
      border-color: ${({ theme }) => theme.colors.orange};
    `}
`;

export const StyledLogoWr = styled(ClearbitImage)`
  display: flex;
  justify-content: flex-start;
  img {
    max-height: 44px;
    width: 44px;
    margin-bottom: 1.5em;
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      img {
        max-height: 36px;
        width: 36px;
      }
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      img {
        margin-bottom: 1.5em;
        max-height: 66px;
        width: 66px;
      }
    `)};
`;

export const StyledTitleH2 = styled.h2`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 1.3636;
  margin-bottom: 0.3636em;
  margin-top: 0;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      font-size: 1.9rem;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      font-size: 2.2rem;
    `)};
`;

export const StyledTitleH3 = styled.h3`
  font-weight: 600;
  font-size: 1.9rem;
  line-height: 1.3636;
  margin-bottom: 0.2632em;
  margin-top: 0;
`;

export const StyledReadMore = styled(ReadMore)<{ $mainCard?: boolean }>`
  font-size: 1.4rem;
  line-height: 1.5714;
  color: #66717e;

  ${({ $mainCard }) =>
    $mainCard === true &&
    css`
      font-size: 1.8rem;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.darkBlue};

      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          font-size: 1.6rem;
          line-height: 1.6875;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          font-size: 1.8rem;
          line-height: 1.5;
          margin-bottom: 1.3333em;
        `)};
    `}
`;

export const StyledDescriptionP = styled.p<{ $mainCard?: boolean }>`
  font-size: 1.4rem;
  line-height: 1.5714;
  color: #66717e;

  ${({ $mainCard }) =>
    $mainCard === true &&
    css`
      font-size: 1.8rem;
      line-height: 1.5;
      color: ${({ theme }) => theme.colors.darkBlue};

      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          font-size: 1.6rem;
          line-height: 1.6875;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          font-size: 1.8rem;
          line-height: 1.5;
          margin-bottom: 1.3333em;
        `)};
    `}
`;

export const StyledTopBorderDiv = styled.div<{ $borderColor?: BorderColor }>`
  width: 100%;
  height: 4px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 3px 3px 0 0;

  ${({ $borderColor }) =>
    $borderColor === 'blue' &&
    css`
      background-color: ${({ theme }) => theme.colors.blue};
    `}

  ${({ $borderColor }) =>
    $borderColor === 'orange' &&
    css`
      background-color: ${({ theme }) => theme.colors.orange};
    `}

    ${({ $borderColor }) =>
    $borderColor === 'red' &&
    css`
      background-color: ${({ theme }) => theme.colors.red};
    `}

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      height: 8px;
    `)};
`;
