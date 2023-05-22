import styled from 'styled-components';
import Container from '@/components/reusable/container/Container';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(70vh);
  > div {
    max-width: 600px;
    margin-bottom: 2em;
  }
`;
