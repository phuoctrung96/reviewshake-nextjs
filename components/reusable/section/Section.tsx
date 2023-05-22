import { forwardRef, HTMLAttributes, ReactNode, Ref } from 'react';
import { BackgroundProps, SpaceProps } from 'styled-system';
import { StyledSection } from './section.styles';

type SectionType = {
  backgroundColor: SectionBackgroundColorsType;
  children: ReactNode;
  className?: string;
};

export type SectionBackgroundColorsType = 'lightBlueBg' | 'gray' | 'blackBg' | 'white';

export type SectionProps = SectionType &
  BackgroundProps &
  SpaceProps &
  HTMLAttributes<HTMLDivElement>;

const Section = (
  { backgroundColor, pt, pb, children, className = '', ...props }: SectionProps,
  ref?: Ref<HTMLElement>
) => {
  return (
    <StyledSection
      pt={pt ?? { _: '3.75em', md: '4.375em', lg: '6.875em' }}
      pb={pb ?? { _: '3.75em', md: '4.375em', lg: '5.625em' }}
      backgroundColor={backgroundColor}
      className={className}
      ref={ref}
      {...props}
    >
      {children}
    </StyledSection>
  );
};
export default forwardRef(Section);
