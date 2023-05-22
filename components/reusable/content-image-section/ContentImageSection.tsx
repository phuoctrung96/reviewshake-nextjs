import Section, { SectionBackgroundColorsType } from '@/components/reusable/section/Section';
import {
  ContentCenteredType,
  ContentImageSectionType,
} from '@/components/route/generate-reviews/GenerateReviewsPage';
import HeadingBase from '@/components/reusable/heading/Heading';
import Text from '@/components/reusable/text/Text';
import Container from '@/components/reusable/container/Container';
import Grid from '@/components/reusable/grid/Grid';
import Box from '@/components/reusable/box/Box';
import Image from 'next/image';
import { StyledImageWrDiv, StyledImageWrDivDesktop } from './contantImageSection.styles';
import { Property } from 'csstype';
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Flex from '@/components/reusable/flex/Flex';
import VideoWrapper from '@/components/reusable/video-wrapper/VideoWrapper';

type ContentImageSectionProps = {
  backgroundColor: SectionBackgroundColorsType;
  id?: string;
  imageOnRight?: boolean;
  imageMaxWidth?: ResponsiveValue<Property.MaxWidth<TLengthStyledSystem>>;
  descriptionMaxWidth?: ResponsiveValue<Property.MaxWidth<TLengthStyledSystem>>;
  className?: string;
};
const ContentImageSection = ({
  backgroundColor,
  id,
  imageOnRight = false,
  centered = 'default',
  title,
  description,
  image,
  imageMobile,
  content,
  imageMaxWidth = 'unset',
  descriptionMaxWidth,
  preTitle,
  cta,
  className,
  video,
}: ContentImageSectionProps & ContentImageSectionType) => {
  const gridTemplateColumns = {
    default: { _: '1fr', md: imageOnRight ? '6fr 5fr' : '5fr 6fr' },
    toTablet: { _: '1fr', lg: imageOnRight ? '6fr 5fr' : '5fr 6fr' },
    all: { _: 'minmax(0, auto)' },
  };

  const gridLeftColumn = {
    default: { _: 1, md: imageOnRight ? '2/3' : '1/2' },
    toTablet: { _: 1, lg: imageOnRight ? '2/3' : '1/2' },
    all: { _: 1 },
  };

  const gridRightColumn = {
    default: { _: 1, md: imageOnRight ? '1/2' : '2/3' },
    toTablet: { _: 1, lg: imageOnRight ? '1/2' : '2/3' },
    all: { _: 1 },
  };

  const gridRightRow = {
    default: { _: 2, md: 1 },
    toTablet: { _: 2, lg: 1 },
    all: { _: 2 },
  };

  const textAlign: Record<ContentCenteredType, ResponsiveValue<Property.TextAlign>> = {
    default: { _: 'center', md: 'left' },
    toTablet: { _: 'center', lg: 'left' },
    all: { _: 'center' },
  };

  return (
    <Section backgroundColor={backgroundColor} className={className} id={id}>
      <Container>
        <Grid
          gridTemplateColumns={gridTemplateColumns[centered]}
          gridGap={{ _: 60, md: 40, lg: centered === 'all' ? 60 : 130 }}
        >
          <Box
            alignSelf={{ _: 'center' }}
            justifySelf={{ _: 'center' }}
            gridColumn={gridLeftColumn[centered]}
            gridRow={{ _: 1 }}
          >
            {preTitle && (
              <Text
                textAlign="center"
                color="green"
                fontSize="1.2rem"
                mt={0}
                mb={{ _: '1.2rem', lg: '1.8rem' }}
                lineHeight={1.35}
                letterSpacing="2pt"
                fontWeight={700}
              >
                {preTitle}
              </Text>
            )}
            <HeadingBase
              as="h2"
              textAlign={textAlign[centered]}
              mb={{ _: '0.4em', md: '0.375em' }}
              fontSize={centered === 'all' ? { lg: '4.8rem' } : { lg: '3.4rem' }}
            >
              {title}
            </HeadingBase>
            {Array.isArray(description) ? (
              <>
                {description.map((desc, index) => (
                  <Text
                    textAlign={textAlign[centered]}
                    maxWidth={descriptionMaxWidth}
                    mt={{ _: 0 }}
                    ml="auto"
                    mr="auto"
                    mb={{ _: index !== description.length - 1 ? '1.2em' : '0' }}
                    key={index}
                  >
                    {desc}
                  </Text>
                ))}
              </>
            ) : (
              <Text
                textAlign={textAlign[centered]}
                m={{ _: 0 }}
                maxWidth={descriptionMaxWidth}
                ml="auto"
                mr="auto"
              >
                {description}
              </Text>
            )}
            {cta && centered !== 'all' && (
              <BaseLink href={cta.href} mt={{ _: 40, md: 30, lg: 38 }}>
                {cta.label}
              </BaseLink>
            )}
          </Box>
          <Box
            alignSelf={{ _: 'center' }}
            gridColumn={gridRightColumn[centered]}
            gridRow={gridRightRow[centered]}
          >
            {image && imageMobile && (
              <StyledImageWrDiv>
                <Image
                  src={`/assets/images/features/${image.src}`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
                <Image
                  src={`/assets/images/features/${imageMobile.src}`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                />
              </StyledImageWrDiv>
            )}
            {image && !imageMobile && (
              <StyledImageWrDivDesktop maxWidth={imageMaxWidth}>
                <Image
                  src={`/assets/images/features/${image.src}`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  quality={100}
                />
              </StyledImageWrDivDesktop>
            )}
            {content && content}
            {video && <VideoWrapper videoFilename={video.src} />}
          </Box>
        </Grid>
        {cta && centered === 'all' && (
          <Flex justifyContent="center" pt={{ lg: 80 }} display={{ _: 'none', lg: 'flex' }}>
            <BaseLink href={cta.href}>{cta.label}</BaseLink>
          </Flex>
        )}
      </Container>
    </Section>
  );
};

export default ContentImageSection;
