import Hero from '@/components/reusable/hero/Hero';
import styled from 'styled-components';

export const StyledHeroWr = styled(Hero)`
  > div {
    > div {
      &:first-child {
        > div {
          max-width: unset;
          p {
            max-width: 886px;
            margin: 0 auto;
          }
        }
      }
      &:nth-child(2) {
        margin: 0 auto;
      }
    }
  }
`;
