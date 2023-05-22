import { ReactNode } from 'react';
import { LayoutProps, ResponsiveValue, SpaceProps, TypographyProps } from 'styled-system';
import { HeadingTypes } from '@/types/general';
import Heading from '@/components/reusable/heading/Heading';
import Text from '@/components/reusable/text/Text';
import StyledDiv from './titleSection.styles';
import { Property } from 'csstype';

export type TitleSectionType = {
  descriptionMaxWidth?: ResponsiveValue<Property.MaxWidth>;
  children?: ReactNode;
  headingTag?: HeadingTypes;
  description?: string;
  className?: string;
  textAlign?: TypographyProps['textAlign'];
};

const TitleSection = ({
  headingTag = 'h1',
  description,
  children,
  className = '',
  textAlign,
  descriptionMaxWidth,
  ...props
}: TitleSectionType & LayoutProps & SpaceProps) => {
  return (
    <StyledDiv className={`${className}`} {...props}>
      <Heading as={headingTag} mb={{ _: '0.7em', md: '0.5625em' }} textAlign={textAlign}>
        {children}
      </Heading>
      <Text
        maxWidth={descriptionMaxWidth}
        textAlign={textAlign ?? 'center'}
        my={0}
        mx="auto"
        lineHeight={{ _: 1.5, md: 1.6111 }}
      >
        {description}
      </Text>
    </StyledDiv>
  );
};

export default TitleSection;
