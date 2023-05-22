import { ReactNode } from 'react';
import Image, { ImageProps } from 'next/image';
import Container from '@/components/reusable/container/Container';
import {
  StyledDecorator1,
  StyledDecorator2,
  StyledHero,
  StyledHeroImageWrapper,
  StyledTitleSection,
} from './hero.styles';
import HeroCta from '@/components/reusable/hero-cta/HeroCta';
import { ResponsiveValue } from 'styled-system';
import { Property } from 'csstype';
import VideoWrapper from '@/components/reusable/youtube-video-with-poster/YoutubeVideoWithPoster';

type HeroType = {
  title: JSX.Element | string;
  description: string;
  descriptionMaxWidth?: ResponsiveValue<Property.MaxWidth>;
  image?: ImageProps;
  youtubeVideoId?: string;
  className?: string;
  children?: ReactNode;
};

const Hero = ({
  title,
  description,
  descriptionMaxWidth = { _: 'unset', md: '80%' },
  image,
  youtubeVideoId,
  className = '',
  children,
}: HeroType) => {
  return (
    <StyledHero
      pt={{ _: 237, md: 209, lg: 182 }}
      pb={image || youtubeVideoId ? { _: '35vw', md: 300, lg: 450 } : 0}
      className={className}
    >
      <Container>
        <StyledDecorator1 decPosition1="dec1">
          <StyledTitleSection description={description} descriptionMaxWidth={descriptionMaxWidth}>
            {title}
          </StyledTitleSection>
        </StyledDecorator1>
        <HeroCta justifyContent="center" mx={{ _: 'auto' }} />
        {(image || youtubeVideoId) && (
          <StyledHeroImageWrapper>
            <StyledDecorator2 decPosition1="dec1" decPosition2="dec2">
              {image && <Image {...image} quality={100} priority />}
              {youtubeVideoId && <VideoWrapper youtubeVideoId={youtubeVideoId} />}
            </StyledDecorator2>
          </StyledHeroImageWrapper>
        )}
        {children}
      </Container>
    </StyledHero>
  );
};

export default Hero;
