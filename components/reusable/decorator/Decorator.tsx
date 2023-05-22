import { ReactNode } from 'react';
import { StyledDiv } from './decorator.styles';

export type DecoratorType = {
  decPosition1?: DecoratorOptionsType;
  decPosition2?: DecoratorOptionsType;
  className?: string;
  children?: ReactNode;
};

export type DecoratorOptionsType = 'dec1' | 'dec2';

const Decorator = ({ decPosition1, decPosition2, className = '', children }: DecoratorType) => {
  return (
    <StyledDiv $decPosition1={decPosition1} $decPosition2={decPosition2} className={className}>
      {children}
    </StyledDiv>
  );
};

export default Decorator;
