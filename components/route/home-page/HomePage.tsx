import BoostSocialProof from '@/components/reusable/boost-social-proof/BoostSocialProof';
import Container from '@/components/reusable/container/Container';
import Hero from '@/components/reusable/hero/Hero';
import Partners from '@/components/reusable/partners/Partners';
import Review from '@/components/reusable/review/Review';
import Section from '@/components/reusable/section/Section';
import HomePageSections from './HomePageSections';

const HomePage = () => {
  return (
    <>
      <Hero
        title={
          <>
            The new standard in <span>review management</span>
          </>
        }
        description="The all-in-one tool to generate reviews, boost your brand and keep up-to-date with your reputation."
        descriptionMaxWidth={{ _: 'unset', md: '500px' }}
        image={{
          src: '/assets/images/small-business/hero.png',
          width: 1170,
          height: 615,
          alt: 'Reviewshake Dashboard',
        }}
      />
      <Section backgroundColor="gray" pt={0}>
        <Container pt={{ _: '40%', md: 275, lg: '35vw', xl: 420 }} pb={{ _: 48, md: 38, lg: 68 }}>
          <Review
            title='"We have generated over 2,000 reviews for our clients using Reviewshake."'
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
      </Section>
      <HomePageSections />
      <BoostSocialProof youtubeVideoId="wxNdMs4OhL8" />
    </>
  );
};

export default HomePage;
