import styled from 'styled-components';

export const StyledUl = styled.ul`
  padding: 0;
  position: relative;
  li {
    padding: 1.8rem 2.4rem;
    color: ${({ theme }) => theme.colors.grayDarkText};
    border-bottom: 1px solid #e0e0e0;
    line-height: 1.6875;
    &:last-child {
      border-bottom: none;
    }
  }
`;
