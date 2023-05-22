import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

const StyledDiv = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    defaultValidatorFn(prop) && !['maxWidth'].includes(prop),
})<LayoutProps & SpaceProps>`
  margin-right: auto;
  margin-left: auto;

  ${layout}
  ${space}
`;

StyledDiv.defaultProps = {
  maxWidth: ['620px', '620px', '620px', '880px', '880px'],
};

export default StyledDiv;
