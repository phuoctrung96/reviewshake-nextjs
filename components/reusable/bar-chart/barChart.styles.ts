import styled, { css } from 'styled-components';

export const StyledBarChartWr = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  height: 450px;
`;

export const StyledBarChartTooltipWr = styled.div`
  color: #737373;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  padding: 14px;
  p {
    margin: 0;
  }
  span {
    color: ${({ theme }) => theme.colors.black};
  }
`;
