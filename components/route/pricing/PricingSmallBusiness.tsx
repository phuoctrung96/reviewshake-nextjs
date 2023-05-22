import { useRef } from 'react';
import { faqSmallBusinessData } from './pricingData';
import Text from '@/components/reusable/text/Text';
import Section from '@/components/reusable/section/Section';
import Container from '@/components/reusable/container/Container';
import Heading from '@/components/reusable/heading/Heading';
import ComparePlansTable from '@/components/reusable/compare-plans-table/ComparePlansTable';
import PricingSmallBusinessCards from './PricingSmallBusinessCards';
import FaqSection from '@/components/reusable/faq-section/FaqSection';

type PricingSmallBusinessProps = {
  isMonthly: boolean;
};

const PricingSmallBusiness = ({ isMonthly }: PricingSmallBusinessProps) => {
  const moreFeaturesRef = useRef<HTMLElement>(null);

  const scrollToFeatures = () => moreFeaturesRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <PricingSmallBusinessCards isMonthly={isMonthly} scrollToFeatures={scrollToFeatures} />
      <Section backgroundColor="white" ref={moreFeaturesRef}>
        <Container id="moreFeatures">
          <Heading
            as="h3"
            textAlign="center"
            fontSize={{ _: '3rem', md: '3.2rem', lg: '4.8rem' }}
            lineHeight={{ _: '4.05rem', md: '4.32re,', lg: '6.48rem' }}
            mb={{ _: '1.2rem' }}
            maxWidth={{ _: '300px', md: 'unset' }}
            mx={{ _: 'auto' }}
          >
            Compare Plans, Side by Side
          </Heading>
          <Text textAlign="center" my={0} lineHeight={{ _: 1.5, md: 1.6111 }}>
            Easy to switch at any time.
          </Text>
          <ComparePlansTable />
        </Container>
      </Section>
      <FaqSection faqItems={faqSmallBusinessData} />
    </>
  );
};

export default PricingSmallBusiness;
