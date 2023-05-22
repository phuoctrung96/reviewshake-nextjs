import styled, { css } from 'styled-components';
import { HeadingTypes } from '@/types/general';

export const StyledTitleComponentWr = styled.h1<{
  $as: HeadingTypes;
  $type: 'Primary' | 'Secondary';
}>`
  ${({ $as }) =>
    $as === 'h1' &&
    css`
      text-align: center;
      font-size: 3.6rem;
      line-height: 1.35em;
      margin-bottom: 0.3889em;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          font-size: 4.4rem;
          margin-bottom: 0.2963em;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          font-size: 6.4rem;
        `)};
    `}

  ${({ $as }) =>
    $as === 'h2' &&
    css`
      text-align: center;
      font-size: 3.6rem;
      line-height: 1.35em;
      margin-bottom: 0.7931em;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          font-size: 3.2rem;
          margin-bottom: 0.3235em;
          line-height: 1.1667em;
        `)};

      ${({ theme }) =>
        theme.mediaQueries('lg')(css`
          font-size: 5.2rem;
        `)};
    `}

  ${({ $as }) =>
    $as === 'h3' &&
    css`
      font-size: 1.625rem;
      line-height: 1.1923em;
      margin-bottom: 0.5769em;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          margin-bottom: 0;
          font-size: 2.25rem;
          line-height: 1.1667em;
        `)};
    `}

  ${({ $type }) =>
    $type === 'Primary' &&
    css`
      margin-bottom: 0.5833em;
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          margin-bottom: 0.5625em;
        `)};
    `}

  ${({ $type }) =>
    $type === 'Secondary' &&
    css`
      text-align: left;
      margin-bottom: 0.2885em;
    `}
`;
