import { ReactNode } from 'react';
import Text from '@/components/reusable/text/Text';

type ContentTextType = {
  last?: true;
  children: ReactNode;
};

const ContentText = ({ last, children }: ContentTextType) => {
  return (
    <Text
      m={last ? 0 : '0 0 3.2rem'}
      fontSize={{ _: '1.7rem', md: '1.8rem', lg: '2rem' }}
      lineHeight={{ _: '2.5rem', md: '2.9rem' }}
    >
      {children}
    </Text>
  );
};

export default ContentText;
