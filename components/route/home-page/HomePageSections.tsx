import Image from 'next/image';
import { ReactElement } from 'react';
import Author from '@/components/reusable/author/Author';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Container from '@/components/reusable/container/Container';
import Flex from '@/components/reusable/flex/Flex';
import Grid from '@/components/reusable/grid/Grid';
import HeadingBase from '@/components/reusable/heading/Heading';
import ReviewedOn, { ReviewServiceType } from '@/components/reusable/reviewed-on/ReviewedOn';
import Section from '@/components/reusable/section/Section';
import Text from '@/components/reusable/text/Text';
import TextCapValue from '@/components/reusable/text-cap-value/TextCapValue';
import { ImageType } from '@/types/general';
import { StyledImgWr } from './homePageSections.styles';
import VideoWrapper from '@/components/reusable/video-wrapper/VideoWrapper';

type HomePageSectionsType = {
  title: string;
  authorName: string;
  authorDescription: string;
  authorReview: string;
  authorPhoto?: string;
  reviewedOn: ReviewServiceType;
  reviewLink: string;
  capValue: string | ReactElement;
  capValueDescription: string;
  link: string;
  image?: ImageType;
  video?: {
    src: string;
  };
};

const homePageSections: HomePageSectionsType[] = [
  {
    title: 'Generate reviews on auto-pilot',
    authorName: 'Jed H',
    authorDescription: 'Owner, Digital Agencies',
    authorReview:
      '"What I really like is that the system follows up (not aggressively) but gentle reminders for the customers to leave the review. It is WAY more effective than a single text, phone call, or email. It also stays on brand and is consistent with what the dealership wants."',
    reviewedOn: 'g2',
    reviewLink: 'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4622006',
    capValue: '25%',
    capValueDescription: 'more influence of reviews on conversions than in 2019',
    link: '/generate-reviews',
    video: {
      src: 'Animation03.mp4',
    },
  },
  {
    title: 'Stay on top of your reviews',
    authorName: 'Mike C',
    authorDescription: 'Software Developer, Small Business',
    authorReview: '"I like how it monitors for new reviews that come in and sends me an email"',
    authorPhoto: 'mike',
    reviewedOn: 'g2',
    reviewLink: 'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4627207',
    capValue: '45%',
    capValueDescription:
      "of consumers say they're more likely to visit a business if it responds to negative reviews",
    link: '/manage-reviews',
    image: {
      src: 'stay-on-top.png',
      alt: 'Dashboard displaying the list of reviews and possible actions to take.',
      width: 1248,
      height: 1141,
    },
  },
  {
    title: 'Build social proof',
    authorName: 'Brad C',
    authorDescription: 'Director, Small Business',
    authorReview:
      '"It\'s a very easy to use platform, we can access all our customer feedback in one place, we can easily "show off" our good reviews on our website and across socials."',
    authorPhoto: 'Brad C',
    reviewedOn: 'g2',
    reviewLink: 'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5203050',
    capValue: '50%',
    capValueDescription: 'increase in review interactions compared to pre-pandemic levels',
    link: '/market-reviews',
    image: {
      src: 'social-proof.png',
      alt: 'Showcase of review widget with multiple ways of customizing the content.',
      width: 621,
      height: 584,
    },
  },
  {
    title: 'Track your progress',
    authorName: 'Goran M',
    authorDescription: 'General Manager, SMB',
    authorReview:
      '"Feature we use and appreciate is reports. You can make client, team meetings and show the reports in a visual way, dynamically changing the date range."',
    reviewedOn: 'g2',
    reviewLink: 'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4618657',
    capValue: (
      <strong>
        15<span>stats</span>
      </strong>
    ),
    capValueDescription: 'available at a glance',
    link: '/analyze-reviews',
    image: {
      src: 'track-progress.png',
      alt: 'Reports section of the dashboard with total reviews, average rating and more.',
      width: 650,
      height: 514,
    },
  },
  {
    title: 'Communicate with your customers',
    authorName: 'Brad C',
    authorDescription: 'Director, Small Business',
    authorReview:
      '"We are getting honest feedback from clients about their experience with us. It\'s not always positive feedback, but it\'s provided an opportunity for us to recognise ways we can provide a better service."',
    authorPhoto: 'Brad C',
    reviewedOn: 'g2',
    reviewLink: 'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5203050',
    capValue: '94%',
    capValueDescription:
      'of consumers expect a brand to answer their questions and respond to their negative posts.',
    link: '/inbox',
    image: {
      src: 'communicate.png',
      alt: 'Inbox section wit a chat interface to communicate with customers.',
      width: 667,
      height: 572,
    },
  },
];

const HomePageSections = () => {
  return (
    <>
      {homePageSections.map(
        (
          {
            title,
            authorName,
            authorDescription,
            authorReview,
            authorPhoto,
            reviewLink,
            capValue,
            capValueDescription,
            image,
            link,
            reviewedOn,
            video,
          },
          index
        ) => {
          const isEven = index % 2 === 0;

          return (
            <Section
              backgroundColor={index === 0 ? 'white' : isEven ? 'lightBlueBg' : 'gray'}
              key={index}
              pb={
                index === 0
                  ? { _: '4.2rem', md: '6rem', lg: '7rem' }
                  : { _: '4.2rem', md: '7rem', lg: '11rem' }
              }
              css={`
                overflow: hidden;
              `}
            >
              <Container>
                <HeadingBase
                  as="h2"
                  maxWidth={{ md: 370, lg: 'unset' }}
                  mb={
                    index === 0
                      ? { _: '4.2rem', md: '6rem', lg: '7rem' }
                      : { _: '4.2rem', md: '7rem', lg: '9rem' }
                  }
                >
                  {title}
                </HeadingBase>
                <Grid
                  gridTemplateColumns={{ _: '1fr', md: '1fr 1fr' }}
                  gridGap={{ _: '60px', md: 0 }}
                >
                  <Flex
                    flexDirection={'column'}
                    order={{ _: 0, md: isEven ? 0 : 1 }}
                    pr={{ _: 0, md: isEven ? '34px' : 0 }}
                    pl={{ _: 0, md: isEven ? 0 : '30px' }}
                  >
                    <Author
                      authorName={authorName}
                      description={authorDescription}
                      photoFilename={authorPhoto}
                    />
                    <Text fontStyle="italic" mb={0}>
                      {authorReview}
                    </Text>
                    <ReviewedOn reviewService={reviewedOn} reviewLink={reviewLink} />
                    <TextCapValue capValue={capValue} description={capValueDescription} />
                    <BaseLink href={link} viewType="alternative" linkIcon="arrow">
                      Find out more
                    </BaseLink>
                  </Flex>
                  <Flex alignItems="center" justifyContent={{ _: 'center', md: 'unset' }}>
                    <StyledImgWr isEven={isEven} index={index}>
                      {video && <VideoWrapper videoFilename={video.src} />}
                      {image && (
                        <picture>
                          <Image
                            src={`/assets/images/home/${image.src}`}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                            quality={100}
                          />
                        </picture>
                      )}
                    </StyledImgWr>
                  </Flex>
                </Grid>
              </Container>
            </Section>
          );
        }
      )}
    </>
  );
};

export default HomePageSections;
