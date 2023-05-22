import styled, { css } from 'styled-components';
import { DecoratorOptionsType } from './Decorator';

export const StyledDiv = styled.div<{
  $decPosition1?: DecoratorOptionsType;
  $decPosition2?: DecoratorOptionsType;
}>`
  position: relative;

  ${({ $decPosition1 }) =>
    $decPosition1 &&
    css`
      &:before {
        position: absolute;
        content: '';
        background: ${`url('/assets/images/decorators/${$decPosition1}.svg') no-repeat`};
      }
    `}

  ${({ $decPosition2 }) =>
    $decPosition2 &&
    css`
      &:after {
        position: absolute;
        content: '';
        background: ${`url('/assets/images/decorators/${$decPosition2}.svg') no-repeat`};
      }
    `}
`;
