import Section from '@/components/reusable/section/Section';
import Container from '@/components/reusable/container/Container';
import Grid from '@/components/reusable/grid/Grid';
import { pricingData } from './pricingData';
import PricingCard from '@/components/reusable/pricing-card/PricingCard';
import Flex from '@/components/reusable/flex/Flex';
import Text from '@/components/reusable/text/Text';
import Review from '@/components/reusable/review/Review';

type PricingSmallBusinessCardsType = {
  isMonthly: boolean;
  scrollToFeatures?: () => void;
  hideReview?: true;
};

const PricingSmallBusinessCards = ({
  isMonthly,
  scrollToFeatures,
  hideReview,
}: PricingSmallBusinessCardsType) => {
  return (
    <Section backgroundColor="gray" pt={0}>
      <Container>
        <Grid
          gridGap={{ _: '2rem', md: '3rem' }}
          gridTemplateColumns={{ _: '1fr', md: 'repeat(3, 1fr)' }}
        >
          {pricingData.map((pricingItem) => (
            <PricingCard
              key={pricingItem.id}
              isMonthly={isMonthly}
              {...pricingItem}
              {...(scrollToFeatures
                ? { scrollToFeatures }
                : { moreFeaturesLink: '/pricing/small-business#moreFeatures' })}
            />
          ))}
        </Grid>
        <Flex
          flexDirection="column"
          backgroundColor="#F0F0F0"
          mt={{ _: '2rem', md: '4rem', lg: '3rem' }}
          mb={hideReview ? 0 : { _: '3rem', md: '6.4rem', lg: '8rem' }}
          p={{ _: '2rem', md: '2.4rem', lg: '4.4rem 2.4rem' }}
          borderRadius={6}
        >
          <Text
            fontWeight={600}
            m={0}
            fontSize={{ _: '2rem', lg: '2.4rem' }}
            lineHeight={{ _: '2.7rem', lg: '3.2rem' }}
          >
            Risk free
          </Text>
          <Text
            fontSize={{ _: '1.6rem', lg: '1.8rem' }}
            color="blueDark"
            lineHeight={1.6875}
            mt={{ _: '1.2rem' }}
            mb={0}
          >
            At the end of your trial, you may downgrade to our basic <strong>Free Plan</strong>
          </Text>
          <Text
            fontSize={{ _: '1.4rem' }}
            lineHeight={{ _: '2.7rem' }}
            fontStyle="italic"
            color="grayDarkText"
            mt={{ _: '1.2rem' }}
            mb={0}
            pr={{ _: '20%' }}
          >
            2 review profiles, 100 email invites, 1 user, 2 video reviews.
          </Text>
        </Flex>
        {!hideReview && (
          <Review
            title='"I like how it monitors for new reviews that come in and sends me an email"'
            reviewer={{
              reviewerName: 'Mike C',
              reviewLink:
                'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4627207',
              position: 'Software developer, Small Business',
              photo: 'mike',
            }}
          />
        )}
      </Container>
    </Section>
  );
};

export default PricingSmallBusinessCards;
