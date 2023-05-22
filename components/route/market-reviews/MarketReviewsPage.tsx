import { ContentImageSectionType } from '@/components/route/generate-reviews/GenerateReviewsPage';
import HeroFeatures from '@/components/reusable/hero-features/HeroFeatures';
import Image from 'next/image';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';
import Partners from '@/components/reusable/partners/Partners';
import Section from '@/components/reusable/section/Section';
import TitleSection from '@/components/reusable/title-section/TitleSection';
import Container from '@/components/reusable/container/Container';
import { StyledImageBgDiv } from './marketReviews.styles';
import Tabs from '@/components/reusable/tabs/Tabs/Tabs';

const CONTENT: ContentImageSectionType[] = [
  {
    backgroundColor: 'white',
    title: 'Widgets',
    description: 'Widgets are one of the most powerful way to showcase your reviews.',
    content: <Tabs />,
    centered: 'all',
    cta: {
      href: 'https://app.reviewshake.com/signup',
      label: 'Try free',
    },
  },
  {
    backgroundColor: 'gray',
    title: 'Rich snippets',
    description: 'Show star rating for Google search results using our rich snippet markup.',
    image: {
      src: 'market-reviews/rich-snippets.png',
      alt: 'Showcase of rich review snippets',
      width: 501,
      height: 377,
    },
  },
  {
    backgroundColor: 'white',
    title: 'Personalize your email widget',
    description: 'Use our email widgets to add the review generation snippet for email signatures.',
    image: {
      src: 'market-reviews/personalize-email.svg',
      alt: 'Showcase of personalized email widget',
      width: 477,
      height: 340,
    },
  },
];

const MarketReviewsPage = () => {
  return (
    <>
      <HeroFeatures
        title="Build social proof to close more deals"
        description="Boost your brand perception by showing off online reviews to your prospective customers. Widgets, social sharing, video reviews - we have everything you need."
        rightContent={
          <Image
            src="/assets/images/features/manage-reviews/hero-image.svg"
            alt="Tripadvisor and Google reviews overview "
            width={491}
            height={377}
            priority
          />
        }
        review={{
          title:
            '"It\'s a very easy to use platform, we can access all our customer feedback in one place, we can easily "show off" our good reviews on our website and across socials."',
          reviewer: {
            reviewerName: 'Brad C',
            reviewLink:
              'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5203050',
            position: 'Director, Small Business',
            photo: 'Brad C',
          },
        }}
      />
      {CONTENT.map((content, index) => (
        <ContentImageSection
          key={index}
          imageOnRight={index % 2 !== 0}
          {...content}
          {...(content.title === 'Widgets' && {
            descriptionMaxWidth: { _: 280, md: 350, lg: 520 },
          })}
        />
      ))}
      <Section backgroundColor="gray" pb={0}>
        <Container pb={{ _: 60, md: 38, lg: 60 }}>
          <TitleSection
            headingTag="h2"
            description="Show off your top reviews to the world. Using our social sharing setup, you can automatically post reviews on Google, Facebook, Twitter. This will boost social proof and increase trust in your brand."
          >
            Boost your brand on Google and Facebook
          </TitleSection>
        </Container>
        <StyledImageBgDiv>
          <Image
            src="/assets/images/features/market-reviews/reviewshake.png"
            alt="Reviewshake facebook post"
            width={900}
            height={947}
          />
        </StyledImageBgDiv>
      </Section>

      <Section backgroundColor="white" pt={{ _: 50 }}>
        <Partners />
      </Section>
    </>
  );
};

export default MarketReviewsPage;
