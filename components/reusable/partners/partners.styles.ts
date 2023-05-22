import styled, { css } from 'styled-components';
import Container from '@/components/reusable/container/Container';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  p {
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 170px;
    margin-bottom: 25px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      img {
        flex: 1 1 20%;
        max-width: 20%;
        margin-bottom: 0;
      }
      p {
        &:before,
        &:after {
          content: '';
          flex: 1 1;
          height: 1px;
          margin: 0 1.5em;
          background-color: #e0e0e0;
        }
      }
    `)};
`;
