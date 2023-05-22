import styled from 'styled-components';
import Text from '@/components/reusable/text/Text';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

export const StyledPriceText = styled(Text)<TypographyProps & SpaceProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  ${typography};
  ${space};
`;

export const StyledSpan = styled.span<TypographyProps>`
  margin-left: 0.6rem;
  color: ${({ theme }) => theme.colors.grayDarkText};

  &:first-of-type {
    font-weight: 500;
    margin-right: 0.6rem;
  }

  &:last-of-type {
    font-weight: 600;
  }

  ${typography};
`;

export const StyledPricingUl = styled.ul`
  padding: 0;
`;
