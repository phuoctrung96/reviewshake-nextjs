import styled from 'styled-components';
import Link from 'next/link';

export const StyledLink = styled(Link)`
  svg {
    circle {
      transition: fill 250ms ease-in-out;
    }
  }
  &:hover,
  &:focus {
    svg {
      circle {
        fill: ${({ theme }) => theme.colors.green};
      }
    }
  }
`;
