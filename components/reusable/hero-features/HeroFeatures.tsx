import { ReactNode } from 'react';
import Container from '@/components/reusable/container/Container';
import Flex from '@/components/reusable/flex/Flex';
import Box from '@/components/reusable/box/Box';
import TitleSection from '@/components/reusable/title-section/TitleSection';
import HeroCta from '@/components/reusable/hero-cta/HeroCta';
import Review, { ReviewType } from '@/components/reusable/review/Review';
import Section from '@/components/reusable/section/Section';
import { StyledDecorator1, StyledDecorator2 } from './heroFeatures.styles';

type HeroFeaturesProps = {
  title: string;
  description: string;
  review: ReviewType;
  rightContent: ReactNode;
  className?: string;
};

const HeroFeatures = ({
  title,
  description,
  review,
  rightContent,
  className = '',
}: HeroFeaturesProps) => {
  return (
    <Section
      backgroundColor="lightBlueBg"
      pt={{ _: '23.7rem', md: '20.9rem', lg: '27.5rem' }}
      className={className}
    >
      <Container>
        <Flex flexDirection={{ _: 'column', md: 'row' }} flexWrap={{ md: 'wrap' }}>
          <Box flex={{ md: '0 1 60%' }} pr={{ md: '4.8rem' }}>
            <StyledDecorator1 decPosition1="dec1">
              <TitleSection
                headingTag="h1"
                description={description}
                textAlign={{ _: 'center', md: 'left' }}
                pr={{ lg: '10%' }}
              >
                {title}
              </TitleSection>
            </StyledDecorator1>
            <HeroCta pt={{ _: 11 }} />
          </Box>
          <Flex
            mt={{ _: 50 }}
            mb={{ _: 60 }}
            justifyContent="center"
            alignItems={{ _: 'center' }}
            flex={{ md: '0 1 40%' }}
          >
            {rightContent}
          </Flex>
          <Box flex={{ md: '1 1 100%' }} pt={{ md: '11.8rem', lg: '6.5rem' }}>
            <StyledDecorator2 decPosition1="dec2">
              <Review {...review} />
            </StyledDecorator2>
          </Box>
        </Flex>
      </Container>
    </Section>
  );
};

export default HeroFeatures;
