import { useState } from 'react';
import { StyledHeroWr } from '@/components/route/agency/agency.styles';
import Container from '@/components/reusable/container/Container';
import Review from '@/components/reusable/review/Review';
import Partners from '@/components/reusable/partners/Partners';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Section from '@/components/reusable/section/Section';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';
import { SMALL_BUSINESS_DATA } from './smallBusinessData';
import PricingSmallBusinessCards from '@/components/route/pricing/PricingSmallBusinessCards';
import PricingPeriodSwitch from '@/components/reusable/pricing-period-switch/PricingPeriodSwitch';
import Box from '@/components/reusable/box/Box';
import BoostSocialProof from '@/components/reusable/boost-social-proof/BoostSocialProof';
import FaqSection from '@/components/reusable/faq-section/FaqSection';
import { faqSmallBusinessData } from '../pricing/pricingData';
import ReviewWidget from '@/components/reusable/review-widget/ReviewWidget';

const SmallBusinessPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <StyledHeroWr
        title="Your customers aren't waiting around to leave you a review"
        description="One tool to generate, manage, market and analyze online reviews."
        image={{
          src: '/assets/images/small-business/hero.png',
          width: 1170,
          height: 615,
          alt: 'Reviewshake Dashboard',
        }}
      />
      <Section
        backgroundColor="gray"
        pt={{ _: '18rem', md: '24rem', lg: '38rem' }}
        pb={{ _: '6rem', md: '7rem', lg: '8rem' }}
      >
        <Container pb={{ _: '2.8rem', md: '3.8rem', lg: '6rem' }}>
          <Review
            title={'“We have generated over 2,000 reviews for our clients using Reviewshake."'}
            reviewer={{
              reviewerName: 'Eric D',
              reviewLink:
                'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5197498',
              position: 'Founder & CEO, Small Business',
              photo: 'Eric D',
            }}
          />
        </Container>
        <Partners />
        <BaseLink
          href="https://app.reviewshake.com/signup"
          external
          mx="auto"
          mt={{ _: '5rem' }}
          display={{ _: 'none', md: 'block' }}
          textAlign="center"
        >
          Try free
        </BaseLink>
      </Section>
      {SMALL_BUSINESS_DATA.map((content, index) => (
        <ContentImageSection key={index} {...content} imageOnRight={index % 2 === 0} />
      ))}
      <Section backgroundColor={'gray'} pb={0}>
        <PricingPeriodSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        <Box mt={{ _: '3.6rem', md: '4rem', lg: '6rem' }}>
          <PricingSmallBusinessCards isMonthly={isMonthly} hideReview />
        </Box>
      </Section>
      <Section backgroundColor="white">
        <Container>
          <ReviewWidget />
        </Container>
      </Section>
      <BoostSocialProof backgroundColor="gray" youtubeVideoId="wxNdMs4OhL8" />
      <FaqSection faqItems={faqSmallBusinessData} backgroundColor="lightBlueBg" />
    </>
  );
};

export default SmallBusinessPage;
