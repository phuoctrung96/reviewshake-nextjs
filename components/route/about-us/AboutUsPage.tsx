import Container from '@/components/reusable/container/Container';
import Grid from '@/components/reusable/grid/Grid';
import HeadingBase from '@/components/reusable/heading/Heading';
import ImageWithFrame from '@/components/reusable/image-with-frame/ImageWithFrame';
import Section from '@/components/reusable/section/Section';
import Text from '@/components/reusable/text/Text';
import { StyledBackgroundDiv, StyledDecorator, StyledIconsDiv } from './aboutUsPage.styles';
import FacebookLogo from '@/components/reusable/icons/FacebookLogo';
import Yelp from '@/components/reusable/icons/Yelp';
import Tripadvisor from '@/components/reusable/icons/Tripadvisor';
import Airbnb from '@/components/reusable/icons/Airbnb';
import Google from '@/components/reusable/icons/Google';
import Box from '@/components/reusable/box/Box';
import Partners from '@/components/reusable/partners/Partners';
import Flex from '@/components/reusable/flex/Flex';
import TextCapValue from '@/components/reusable/text-cap-value/TextCapValue';
import TitleSection from '@/components/reusable/title-section/TitleSection';
import Team from '@/components/reusable/team/Team';
import OurValues from '@/components/reusable/our-values/OurValues';

const RESULTS = [
  {
    title: '2018',
    description: 'Year we were founded',
  },
  {
    title: '30+',
    description: 'Members in our remote team',
  },
  {
    title: '20+',
    description: 'Countries represented',
  },
  {
    title: '1,000+',
    description: 'Customers using our products',
  },
];

const AboutUsPage = () => {
  return (
    <>
      <Section
        backgroundColor="lightBlueBg"
        pt={{ _: 200, md: 167, xl: 192 }}
        pb={{ _: 60, md: 40, lg: 80, xl: 128 }}
      >
        <Container>
          <Grid
            gridTemplateColumns={{ _: '1fr', md: '1fr 1fr', xl: '6fr 4fr' }}
            gridGap={{ _: 50, lg: 68 }}
            alignItems={{ md: 'center' }}
          >
            <Box position="relative">
              <StyledIconsDiv>
                <FacebookLogo />
                <Yelp />
                <Tripadvisor />
                <Airbnb />
                <Google />
              </StyledIconsDiv>
              <StyledDecorator decPosition1="dec1">
                <HeadingBase as="h1" textAlign={{ md: 'left' }}>
                  Mission Statement
                </HeadingBase>
              </StyledDecorator>
              <Text
                textAlign={{ _: 'center', md: 'left' }}
                mt={{ _: '0.6em', md: '1.2222em' }}
                mb={0}
                pr={{ _: 0, lg: 50 }}
              >
                Our mission is to help businesses grow with online reviews. While we love growth, we
                don&apos;t strive for growth at all costs and are building a company that we can be
                proud of, and enjoy working for.
              </Text>
            </Box>
            <div>
              <ImageWithFrame
                src="/assets/images/about-us/company-mission-statement.jpeg"
                width={944}
                height={708}
                alt="Shake family members chatting"
              />
            </div>
          </Grid>
        </Container>
      </Section>
      <Section backgroundColor="gray" pb={{ md: 49, lg: 59 }}>
        <Partners />
        <Container>
          <Flex
            pt={{ _: 60, lg: 80 }}
            flexDirection={{ _: 'column', md: 'row' }}
            flexWrap={{ md: 'wrap' }}
          >
            <Box flex={{ md: '1 1 50%' }}>
              <HeadingBase
                as="h2"
                textAlign={{ _: 'left' }}
                fontSize={{ _: '3.4rem', md: '3.4rem', lg: '4.8rem' }}
                lineHeight={{ _: 1.59, lg: 1.35 }}
                mb={{ _: '1.24em', md: 0 }}
              >
                What we stand for
              </HeadingBase>
            </Box>
            <Box flex={{ md: '1 1 50%' }}>
              <Text
                mt={{ _: 0 }}
                mb={{ _: 0 }}
                lineHeight={{ _: 1.6111, lg: 1.5 }}
                fontSize={{ lg: '1.8rem' }}
              >
                Being bootstrapped (not venture-backed) and fully remote, we don&apos;t strive for
                growth at all costs, and are building a company that we can be proud of, and enjoy
                working for.
              </Text>
            </Box>
            <Flex
              flex={{ md: '1 1 100%' }}
              pt={{ md: 39, lg: 80 }}
              flexDirection={{ _: 'column', md: 'row' }}
              flexWrap={{ md: 'wrap' }}
            >
              {RESULTS.map(({ title, description }, index) => (
                <Box key={index} flex={{ md: '1 1 50%', lg: '1 1 25%' }}>
                  <TextCapValue capValue={title} description={description} variant="secondary" />
                </Box>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Section>
      <Section backgroundColor="white">
        <Container>
          <Grid
            gridTemplateColumns={{ _: '1fr', md: '1fr 1fr' }}
            gridGap={{ _: 40, md: 0 }}
            alignItems={{ md: 'center' }}
          >
            <Box pr={{ lg: '10%' }}>
              <HeadingBase
                as="h2"
                fontSize={{ _: '3.4rem', md: '3.4rem', lg: '4.8rem' }}
                mb={{ _: 4, md: '0.3529em' }}
                textAlign={{ md: 'left' }}
              >
                Reviewshake is part of the Shake family
              </HeadingBase>
              <Text
                textAlign={{ _: 'center', md: 'left' }}
                fontSize={{ _: '1.5rem', md: '1.8rem' }}
                mt={{ md: 0 }}
                lineHeight={{ md: 1.6111 }}
                mb={{ md: 0 }}
              >
                {
                  "We're a multi-cultural team working remotely across 4 continents, and we pride ourselves in hiring the best talent globally. While we love growth, we don't strive for growth at all costs and are building a company that we can be proud of, and enjoy working for."
                }
              </Text>
            </Box>
            <StyledBackgroundDiv>
              <ImageWithFrame
                src="/assets/images/about-us/company-retreat.jpg"
                width={560}
                height={342}
                alt="Shake team in Thailand"
                frameVariant="secondary"
              />
              <Text
                fontWeight={600}
                fontSize={{ _: '1.3rem' }}
                lineHeight={{ _: 2.23 }}
                textAlign={{ _: 'right' }}
                mt={{ _: '12px' }}
                mb={{ _: 0 }}
              >
                Our 2022 company retreat in Thailand!
              </Text>
            </StyledBackgroundDiv>
          </Grid>
        </Container>
      </Section>
      <Section
        backgroundColor="gray"
        backgroundImage={{ _: 'none', md: "url('assets/images/about-us/world-opacity.png')" }}
        backgroundSize={{ _: 'contain' }}
        backgroundPosition={{ _: 'center 200px', lg: 'center 110px' }}
        backgroundRepeat="no-repeat"
        pb={{ _: 111, md: 58, lg: 90 }}
      >
        <Container>
          <TitleSection
            headingTag="h2"
            description="We're a multi-cultural team working across 4 continents, and we pride ourselves in hiring the best talent globally."
            maxWidth={{ _: '100%', md: 511, lg: 708 }}
          >
            Our Team
          </TitleSection>
          <Team />
        </Container>
      </Section>
      <Section backgroundColor="white">
        <Container>
          <TitleSection description="Our company started as fully-remote (we're now hybrid!) and we believe the best work happens when given lots of uninterrupted time that's free of distractions.">
            Our Values
          </TitleSection>
          <OurValues />
        </Container>
      </Section>
    </>
  );
};

export default AboutUsPage;
