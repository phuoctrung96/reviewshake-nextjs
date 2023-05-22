import { ReactNode } from 'react';
import HeadingBase from '@/components/reusable/heading/Heading';
import { HeadingTypes } from '@/types/general';

type ContentTitleType = {
  as: HeadingTypes;
  children: ReactNode;
};

type ContentHeadingStylesType = {
  [key in HeadingTypes]?: {
    fontSize: { [key: string]: string };
    lineHeight: { [key: string]: string };
    mb: { [key: string]: string };
  };
};

const contentHeadingStyles: ContentHeadingStylesType = {
  h1: {
    fontSize: { _: '3rem', md: '3.2rem', lg: '4.8rem' },
    lineHeight: { _: '4.05rem', md: '4.32rem', lg: '6.48rem' },
    mb: { _: '3.2rem', md: '3.2rem', lg: '3.2rem' },
  },
  h2: {
    fontSize: { _: '1.8rem', md: '2.2rem', lg: '2.4rem' },
    lineHeight: { _: '2.43rem', md: '2.97rem', lg: '2.9rem' },
    mb: { _: '3.2rem', md: '3.2rem', lg: '3.2rem' },
  },
};

const ContentTitle = ({ as = 'h2', children }: ContentTitleType) => {
  return (
    <HeadingBase
      as={as}
      fontSize={contentHeadingStyles[as]?.fontSize}
      mb={contentHeadingStyles[as]?.mb}
      lineHeight={contentHeadingStyles[as]?.lineHeight}
      textAlign="left"
    >
      {children}
    </HeadingBase>
  );
};

export default ContentTitle;
