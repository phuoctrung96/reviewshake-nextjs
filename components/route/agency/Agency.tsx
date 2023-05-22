import { StyledHeroWr } from './agency.styles';
import Section from '@/components/reusable/section/Section';
import Container from '@/components/reusable/container/Container';
import Review from '@/components/reusable/review/Review';
import Partners from '@/components/reusable/partners/Partners';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';
import Box from '@/components/reusable/box/Box';
import { faqAgencyData } from '../pricing/pricingData';
import { AGENCY_CONTENT } from './agencyData';
import FaqSection from '@/components/reusable/faq-section/FaqSection';
import LearnAboutPricing from '@/components/reusable/learn-about-pricing/LearnAboutPricing';
import ReviewWidget from '@/components/reusable/review-widget/ReviewWidget';

const AgencyPage = () => {
  return (
    <>
      <StyledHeroWr
        title="White label reputation management"
        description="Let us power the tech while you do the sales. Get our scalable review management platform under your brand and relax while your customers improve their online reputation."
        youtubeVideoId="41_jjp_tq88"
      />
      <Section
        backgroundColor="gray"
        pt={{ _: '18rem', md: '24rem', lg: '36rem' }}
        pb={{ _: '6rem', md: '7rem', lg: '8rem' }}
      >
        <Container pb={{ _: '2.8rem', md: '3.8rem', lg: '6rem' }}>
          <Review
            title={
              '"What I really like is that the system follows up (not aggressively) but gentle reminders for the customers to leave the review. It is WAY more effective than a single text, phone call, or email. It also stays on brand and is consistent with what the dealership wants."'
            }
            reviewer={{
              reviewerName: 'Jed H',
              reviewLink:
                'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4622006',
              position: 'Owner, Digital Agencies',
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
      {AGENCY_CONTENT.map((content, index) => (
        <ContentImageSection key={index} {...content} imageOnRight={index % 2 === 0} />
      ))}
      <Section backgroundColor="white" pb={0}>
        <Container>
          <ReviewWidget />
          <Box mt={{ _: '6rem', md: '7rem', lg: '9rem' }}>
            <LearnAboutPricing pricingLink="/pricing/agency" />
          </Box>
        </Container>
      </Section>
      <FaqSection faqItems={faqAgencyData} backgroundColor="white" />
    </>
  );
};

export default AgencyPage;
