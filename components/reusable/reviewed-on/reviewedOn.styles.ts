import styled from 'styled-components';
import Text from '@/components/reusable/text/Text';

export const StyledReviewdOnText = styled(Text)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grayDarkText};

  a {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  svg {
    margin-left: 0.9286em;
  }
`;
