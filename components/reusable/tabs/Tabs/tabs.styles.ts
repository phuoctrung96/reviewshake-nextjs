import styled, { css } from 'styled-components';
import Flex from '@/components/reusable/flex/Flex';

export const StyledFlex = styled(Flex)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 850px;
  margin: 0 auto;

  > div {
    &:first-child {
      position: relative;
      top: 1px;
    }

    &:last-child {
      padding: 1em;
      border: 1px solid #e6e6ea;
      border-radius: 0 0 6px 6px;
      box-shadow: 2px 4px 10px rgba(0, 0, 9, 0.03);
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('s')(css`
      padding: 0 42px;
    `)};
`;
