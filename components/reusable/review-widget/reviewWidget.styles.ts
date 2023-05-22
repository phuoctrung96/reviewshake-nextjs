import styled from 'styled-components';

export const StyledDiv = styled.div`
  max-height: 450px;
  scrollbar-color: #25e85f transparent;
  scrollbar-width: thin;
  overflow-y: scroll;
  padding: 0 20px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 100%;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-button {
    background: transparent;
    height: 0px;
  }
`;
