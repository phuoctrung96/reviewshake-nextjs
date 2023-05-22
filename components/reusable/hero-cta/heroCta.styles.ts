import styled, { css } from 'styled-components';
import Box from '@/components/reusable/box/Box';
import { Property } from 'csstype';

export const StyledHeroCardBox = styled(Box)<{ $justifyContent: Property.JustifyContent }>`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
      
  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      display: inline-flex;
      flex-direction: column;
      max-width: unset;
    `)}
  
  ${({ $justifyContent }) =>
    $justifyContent === 'center'
      ? css`
          margin: 0 auto;
          ${({ theme }) =>
            theme.mediaQueries('lg')(css`
              width: 100%;
            `)};
        `
      : css`
          ${({ theme }) =>
            theme.mediaQueries('lg')(css`
              width: unset;
            `)};
        `}
}
`;
