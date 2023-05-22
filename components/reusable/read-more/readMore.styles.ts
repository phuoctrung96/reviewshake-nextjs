import styled, { css } from 'styled-components';

export const StyledReadMoreWrDiv = styled.div`
  button {
    color: ${({ theme }) => theme.colors.blue};
    &:focus {
      color: ${({ theme }) => theme.colors.blue};
    }
    &:hover {
      color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`;

export const StyledReadMoreDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;
