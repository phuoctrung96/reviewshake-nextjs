import React from 'react';
import { StyledPrimaryLoaderDiv, StyledSecondaryLoaderDiv } from './loader.styles';

type LoaderType = {
  type?: 'primary' | 'secondary';
  className?: string;
};

const Loader = ({ type = 'primary', className = '' }: LoaderType) => {
  return type === 'primary' ? (
    <StyledPrimaryLoaderDiv className={`${className}`}>
      <div></div>
      <div></div>
      <div></div>
    </StyledPrimaryLoaderDiv>
  ) : (
    <StyledSecondaryLoaderDiv className={`${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledSecondaryLoaderDiv>
  );
};

export default Loader;
