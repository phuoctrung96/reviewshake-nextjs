import { StyledTooltipWrDiv } from './tooltip.styles';

const Tooltip = ({ text, children }: any) => {
  return (
    <StyledTooltipWrDiv>
      {children}
      <div role="tooltip">{text}</div>
    </StyledTooltipWrDiv>
  );
};

export default Tooltip;
