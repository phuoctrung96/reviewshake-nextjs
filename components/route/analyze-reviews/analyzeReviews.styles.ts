import HeroFeatures from '@/components/reusable/hero-features/HeroFeatures';
import styled, { css } from 'styled-components';

export const StyledHeroFeatures = styled(HeroFeatures)`
  > div > div > div {
    &:nth-child(2) {
      img {
        width: 100%;
      }
      ${({ theme }) =>
        theme.mediaQueries('md')(css`
          position: relative;
          img {
            position: absolute;
            top: -150px;
            height: 134%;
            left: 0;
            width: auto;
            max-width: unset;
          }
        `)};
    }
  }
`;
