import Box from '@/components/reusable/box/Box';
import Text from '@/components/reusable/text/Text';
import BaseLink from '@/components/reusable/base-link/BaseLink';

type LearnAboutPricingType = {
  pricingLink?: string;
};

const LearnAboutPricing = ({ pricingLink = '/pricing' }: LearnAboutPricingType) => {
  return (
    <Box
      backgroundColor="gray"
      borderRadius={6}
      p={{ _: '2rem', md: '2.4rem', lg: '4.4rem 2.4rem' }}
    >
      <Text
        fontSize={{ _: '2rem', lg: '2.4rem' }}
        lineHeight={{ _: '2.7rem', lg: '3.24rem' }}
        mt={0}
        mb={{ _: '1.2rem' }}
        fontWeight={600}
        color="black"
      >
        {"Learn about pricing and what's included"}
      </Text>
      <Text
        fontSize={{ _: '1.6rem', lg: '1.8rem' }}
        lineHeight={{ _: '2.7rem' }}
        mt={0}
        mb={{ _: '3.2rem', md: '2.4rem' }}
      >
        Try a new and better review management system.
      </Text>
      <BaseLink href={pricingLink} maxWidth={{ _: 'unset', md: 171 }}>
        See pricing
      </BaseLink>
    </Box>
  );
};

export default LearnAboutPricing;
