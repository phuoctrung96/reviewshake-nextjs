import React, { ReactNode } from 'react';
import { StyledTitleComponentWr } from './title.styles';
import { HeadingTypes } from '@/types/general';

type TitleProps = {
  type: 'Primary' | 'Secondary';
  as: HeadingTypes;
  children: ReactNode;
  className?: string;
};

const Title = ({ type, as, children, className = '', ...rest }: TitleProps) => {

  return (
    <StyledTitleComponentWr $type={type} $as={as} className={`${className}`} {...rest}>
      {children}
    </StyledTitleComponentWr>
  );
};

export default Title;