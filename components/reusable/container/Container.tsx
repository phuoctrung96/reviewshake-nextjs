import { ReactNode } from 'react';
import { StyledContainer } from './container.styles';
import { DivElementType } from '@/types/general';
import { SpaceProps, FlexboxProps, PositionProps } from 'styled-system';

export type ContainerProps = {
  children: ReactNode;
  isFlex?: boolean;
  className?: string;
} & DivElementType;

const Container = ({
  children,
  isFlex = false,
  className = '',
  ...props
}: ContainerProps & SpaceProps & FlexboxProps & PositionProps) => {
  return (
    <StyledContainer $isFlex={isFlex} className={`${className}`} p={{ _: '0 2rem' }} {...props}>
      {children}
    </StyledContainer>
  );
};

export default Container;
