import React, { ReactNode } from 'react';
import {
  StyledSectionTitleWr,
  StyledSectionDescription,
} from './sectionTitle.styles';
import Title from '../title/Title';

type SectionTitleProps = {
  title: string;
  children: ReactNode;
  aosAnimation?: 'zoom-in' | 'fade-up';
  aosDelay?: number;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  type?: 'Primary' | 'Secondary';
  className?: string;
};

const SectionTitle = ({
  title,
  children,
  aosAnimation = 'zoom-in',
  aosDelay = 100,
  titleAs = 'h2',
  type = 'Primary',
  className = '',
}: SectionTitleProps) => {
  return (
    <StyledSectionTitleWr $type={type} className={`${className}`}>
      <Title
        type={type}
        as={titleAs}
        {...(type === 'Primary' && {
          'data-aos': aosAnimation,
          'data-aos-delay': aosDelay,
          'data-aos-duration': 600,
        })}
      >
        {title}
      </Title>
      <StyledSectionDescription
        $type={type}
        {...(type === 'Primary' && {
          'data-aos': aosAnimation,
          'data-aos-delay': aosDelay + 100,
          'data-aos-duration': 600,
        })}
      >
        {children}
      </StyledSectionDescription>
    </StyledSectionTitleWr>
  );
};

export default SectionTitle;
