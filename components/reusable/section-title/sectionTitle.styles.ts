import styled, { css } from 'styled-components';
import Title from '../title/Title';

export const StyledSectionTitleWr = styled.div<{ $type: 'Primary' | 'Secondary' }>`
  position: relative;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      display: flex;
      flex-direction: column;
    `)};

  ${({ $type }) =>
    $type === 'Primary' &&
    css`
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          align-items: center;
        `)};
    `}
`;

export const StyledSectionDescription = styled.p<{ $type: 'Primary' | 'Secondary' }>`
  margin: 0 0 16px;
  ${({ $type }) =>
    $type === 'Primary' &&
    css`
      font-size: 2rem;
      line-height: 1.35;
      font-weight: 400;
      text-align: center;
      color: ${({ theme }) => theme.colors.darkBlue};
      position: relative;
      margin-bottom: 0;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          line-height: 1.5;
          max-width: 590px;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('xl')(css`
          font-size: 2.2rem;
          line-height: 1.2272;
        `)};
    `}

  ${({ $type }) =>
    $type === 'Secondary' &&
    css`
      font-size: 2.2rem;
      line-height: 1.2273;
      color: #2b2b59;
      margin-bottom: 3.1818em;
    `}
`;
