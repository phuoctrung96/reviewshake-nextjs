import styled from 'styled-components';

export const AuthorWr = styled.div`
  display: flex;
  align-items: center;
  p {
    flex: 0 1 100%;
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.grayDarkText};

    strong {
      display: block;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const AvatarWr = styled.div`
  width: 38px;
  border-radius: 50%;
  overflow: hidden;
  flex: 0 0 38px;
`;
