import styled from 'styled-components';
import { background, space } from 'styled-system';
import { SectionProps } from './Section';

export const StyledSection = styled.section<SectionProps>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  ${space}
  ${background}
`;
