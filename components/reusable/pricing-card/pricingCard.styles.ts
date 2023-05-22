import styled from 'styled-components';
import Box from '@/components/reusable/box/Box';

export const StyledPricingCardBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  max-width: 350px;
  width: 100%;

  a {
    &:first-of-type {
      width: 100%;
    }
  }
`;
