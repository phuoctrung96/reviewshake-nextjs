import Box from '@/components/reusable/box/Box';
import Text from '@/components/reusable/text/Text';
import { StyledBaseLink, StyledUl } from '@/components/reusable/../route/pricing/pricing.styles';
import ListItem from '@/components/reusable/list-item/ListItem';
import Tag from '@/components/reusable/tag/Tag';
import Price from '@/components/reusable/price/Price';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Flex from '@/components/reusable/flex/Flex';
import theme from '@/styled/theme.styles';

type PricingSingleProps = {
  isMonthly: boolean;
  keyFeatures: string[];
  tag: {
    title: string;
    bgColor: keyof typeof theme.colors;
    color: keyof typeof theme.colors;
  };
  price: {
    monthlyPrice: number;
    monthlyPriceYearlyPayment: number;
    yearlyPrice: number;
  };
  tryFreeLink: string;
};

const PricingSingle = ({ isMonthly, keyFeatures, tag, price, tryFreeLink }: PricingSingleProps) => {
  return (
    <Flex
      backgroundColor="white"
      border="1px solid #E0E0E0"
      borderRadius={6}
      padding={{ _: '1.6rem', md: '1.2rem' }}
      flexDirection={{ _: 'column', md: 'row' }}
      maxWidth="754px"
      mx="auto"
    >
      <Box p={{ _: '1.8rem 1.8rem 0', md: '2.5rem 2.2rem' }} flexBasis={{ _: '100%', md: '45%' }}>
        <Text
          mt={0}
          mb={{ _: '2.4rem' }}
          fontSize={{ _: '1.7rem', lg: '2rem' }}
          lineHeight={{ _: '2.3rem', lg: '2.7rem' }}
          fontWeight={700}
        >
          {"What's included?"}
        </Text>
        <StyledUl>
          {keyFeatures.map((feature, index) => (
            <ListItem key={index}>{feature}</ListItem>
          ))}
        </StyledUl>
      </Box>
      <Box
        p={{ _: '4.1rem 1rem' }}
        border="1px solid #E0E0E0"
        borderRadius={6}
        mt={{ _: '3.4rem', md: 0 }}
        flexBasis={{ _: '100%', md: '55%' }}
      >
        <Tag bgColor={tag.bgColor} color={tag.color} flex={{ _: 1, md: 'unset' }}>
          {tag.title}
        </Tag>
        <Price
          price={isMonthly ? price.monthlyPrice : price.monthlyPriceYearlyPayment}
          fontSize={{ _: '4rem', lg: '5.4rem' }}
          lineHeight={{ _: '5.4rem' }}
          preTitle="Starts at"
          spanFontSize={{ _: '1.7rem', lg: '1.9rem' }}
          spanLineHeight={{ _: '5.4rem' }}
          textAlign="center"
          mt={{ _: '3.6rem' }}
          mb={{ _: '2.6rem' }}
        />
        <Text
          textAlign="center"
          fontSize={{ _: '1.4rem', lg: '1.6rem' }}
          lineHeight={{ _: '1.89rem', lg: '2.16rem' }}
          mb={{ _: '3.6rem' }}
          color="grayDarkText"
          fontWeight={500}
        >
          {isMonthly ? 'Billed monthly' : `$${price.yearlyPrice} billed annually`}
        </Text>
        <BaseLink
          href={tryFreeLink}
          mx={{ _: 'auto' }}
          fontSize={{ _: '1.8rem', md: '1.6rem', lg: '1.8rem' }}
          lineHeight={{ _: '6rem', md: '4.9rem' }}
          height={{ _: '6rem', md: '4.9rem' }}
          maxWidth={{ _: '100%', md: '31rem' }}
        >
          Try free
        </BaseLink>
        <Text
          textAlign="center"
          mt={{ _: '1.2rem' }}
          mb={0}
          fontSize={{ _: '1.6rem', md: '1.5rem' }}
          lineHeight={{ _: 1.375 }}
        >
          or{' '}
          <StyledBaseLink
            viewType="text"
            href="https://calendly.com/reviewshake-product/30min"
            external
          >
            schedule a demo
          </StyledBaseLink>
        </Text>
      </Box>
    </Flex>
  );
};

export default PricingSingle;
