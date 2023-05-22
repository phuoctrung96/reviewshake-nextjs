import styled, { css } from 'styled-components';

export const StyledLineChartWrDiv = styled.div`
  padding-bottom: 0.5em;
  &.blurred:after {
    position: absolute;
    content: '';
    display: block;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    filter: blur(5px);
  }
`;

export const StyledCustomSliceTooltipWr = styled.div`
  background: white;
  padding: 9px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  top: -80px;
  position: relative;
  p {
    margin: 0;
  }
`;
