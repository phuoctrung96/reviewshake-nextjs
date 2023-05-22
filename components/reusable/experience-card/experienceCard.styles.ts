import styled, { css } from 'styled-components';
import { margin, MarginProps } from 'styled-system';

export const StyledExperienceCardDiv = styled.div<MarginProps>`
  background-color: #fff;
  padding: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 169px;
  border: 0.966443px solid #e6e6ea;
  box-shadow: 1.93289px 1.93289px 3.86577px rgba(0, 0, 0, 0.04);
  border-radius: 4.64516px;

  ${({ theme }) =>
    theme.mediaQueries('md')(css`
      width: 139px;
    `)};

  ${({ theme }) =>
    theme.mediaQueries('lg')(css`
      width: 179px;
    `)};

  ${margin}
`;
