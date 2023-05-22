import { ReactNode } from 'react';
import Flex from '@/components/reusable/flex/Flex';
import theme from '@/styled/theme.styles';
import Text from '@/components/reusable/text/Text';
import Box from '@/components/reusable/box/Box';
import { ResponsiveValue } from 'styled-system';
import { Property } from 'csstype';

type TagProps = {
  bgColor: keyof typeof theme.colors;
  color: keyof typeof theme.colors;
  flex?: ResponsiveValue<Property.Flex>;
  children: ReactNode;
};
const Tag = ({ bgColor, color, flex = { md: 1, lg: 'unset' }, children }: TagProps) => {
  return (
    <Flex justifyContent="center">
      <Box
        backgroundColor={bgColor}
        p={{ _: '0.6rem 0.8rem', lg: '0.6rem 1.4rem' }}
        borderRadius={6}
        flex={flex}
      >
        <Text
          color={color}
          mt={0}
          mb={0}
          fontSize={{ _: '1.2rem', md: '1.1rem', lg: '1.3rem' }}
          fontWeight={700}
          textTransform="uppercase"
          textAlign="center"
        >
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

export default Tag;
