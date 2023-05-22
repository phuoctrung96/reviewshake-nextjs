import BaseLink from '@/components/reusable/base-link/BaseLink';
import Container from '@/components/reusable/container/Container';
import Flex from '@/components/reusable/flex/Flex';
import Grid from '@/components/reusable/grid/Grid';
import HeadingBase from '@/components/reusable/heading/Heading';
import Section, { SectionBackgroundColorsType } from '@/components/reusable/section/Section';
import Text from '@/components/reusable/text/Text';
import VideoWrapper from '@/components/reusable/youtube-video-with-poster/YoutubeVideoWithPoster';

type BoostSocialProofType = {
  backgroundColor?: SectionBackgroundColorsType;
  youtubeVideoId?: string;
};

const BoostSocialProof = ({ youtubeVideoId, backgroundColor = 'white' }: BoostSocialProofType) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <Grid gridTemplateColumns={{ _: '1fr', lg: '2fr 3fr' }} gridGap={{ _: 70 }}>
          <Flex flexDirection="column" alignItems={{ _: 'center', lg: 'flex-start' }}>
            <HeadingBase
              as="h2"
              textAlign={{ _: 'center', lg: 'left' }}
              fontSize={{ lg: '3.4rem' }}
              pr={{ lg: '20%' }}
              mb={{ _: '0.4em', md: '0.375em', lg: '0.3529em' }}
              maxWidth={{ md: 330, lg: 'unset' }}
            >
              Boost social proof with Video Reviews
            </HeadingBase>
            <Text
              textAlign={{ _: 'center', lg: 'left' }}
              maxWidth={{ _: '550px' }}
              mb={{ _: '2.1em', md: '2.2222em' }}
            >
              Check out our latest feature: video reviews. You can easily embed them on the landing
              page, and you can receive video testimonials from your customers. The recorded videos
              can be used for a variety of purposes: widgets, social media posts, and even ads.
            </Text>
            <BaseLink href="https://app.reviewshake.com/signup" external>
              Get started
            </BaseLink>
          </Flex>
          <Flex alignItems="center" justifyContent="center" flexWrap="nowrap">
            <VideoWrapper youtubeVideoId={youtubeVideoId} />
          </Flex>
        </Grid>
      </Container>
    </Section>
  );
};

export default BoostSocialProof;
