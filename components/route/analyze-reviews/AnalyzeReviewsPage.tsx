import Image from 'next/image';
import { ContentImageSectionType } from '@/components/route/generate-reviews/GenerateReviewsPage';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';
import Partners from '@/components/reusable/partners/Partners';
import Section from '@/components/reusable/section/Section';
import { StyledHeroFeatures } from './analyzeReviews.styles';
import { css } from 'styled-components';

const CONTENT: ContentImageSectionType[] = [
  {
    backgroundColor: 'white',
    title: 'Track trends over time',
    description:
      'See not only how you are doing today, but how your number of reviews and rating evolved over time. Being able to look at historic trends gives you a better understanding of how your activities impact your brand perception.',
    image: {
      src: 'analyze-reviews/track-trends.png',
      alt: 'Dashboard or reviewshake with all reviews overview, statistics, reviews funnels, and top review sources',
      width: 2732,
      height: 1585,
    },
    centered: 'all',
  },
  {
    backgroundColor: 'gray',
    title: 'Understand your competition',
    description:
      'See how your competitors are doing and benchmark your review performance with them across 15 stats.',
    image: {
      src: 'analyze-reviews/understand-competition.png',
      alt: 'Total reviews of different competitors',
      width: 600,
      height: 346,
    },
  },
  {
    backgroundColor: 'white',
    title: 'Breakdown by sentiment',
    description:
      'Analyze the breakdown of your reviews into positive ones (4-5 stars), neutral (3 stars) and negative (1-2 stars).',
    image: {
      src: 'analyze-reviews/breakdown.svg',
      alt: 'Total reviews of different competitors',
      width: 1170,
      height: 204,
    },
    centered: 'all',
    cta: {
      href: 'https://app.reviewshake.com/signup',
      label: 'Try free',
    },
  },
  {
    backgroundColor: 'lightBlueBg',
    title: 'Compare locations and/or competitors with side-by-side reporting',
    description:
      'Use our powerful reporting tool to create your own reports, sent daily, weekly or monthly over email. Share them with your team to inform your marketing and growth strategy',
    image: {
      src: 'analyze-reviews/compare.svg',
      alt: 'Reporting tools',
      width: 577,
      height: 283,
    },
  },
  {
    backgroundColor: 'gray',
    title: 'Custom reports using our API',
    description:
      'Do you want to add new reports? Access review stats via our API and build your own custom reports.',
    image: {
      src: 'analyze-reviews/api-report.png',
      alt: 'Code representing the request to the API',
      width: 1202,
      height: 536,
    },
  },
  {
    backgroundColor: 'white',
    title: 'Zoom in',
    description:
      "Understand the high-level context from our aggregate reports. Do you want to see what's happening in more detail? We got you covered with per-location reports.",
    image: {
      src: 'analyze-reviews/per-location-reports.svg',
      alt: 'Code representing the request to the API',
      width: 355,
      height: 378,
    },
  },
  {
    backgroundColor: 'gray',
    preTitle: 'COMING SOON',
    title: 'Geo-mapping reviews',
    description:
      'Our latest functionality will allow you to map your reviews geographically. Understand how you are performing at country, state and county level. Even better, you can have a head-to-head comparison with competing brands.',
    image: {
      src: 'analyze-reviews/geo-map-reviews.svg',
      alt: 'Map of the US with reviews',
      width: 1009,
      height: 471,
    },
    centered: 'all',
  },
];

const AnalyzeReviewsPage = () => {
  return (
    <>
      <StyledHeroFeatures
        title="Track your performance"
        description="You've seen and read the reviews about your business. Now you can go one step further: see trends over time, compare with competitors, see results by platform - all these to inform your next marketing decisions and boost your brand."
        rightContent={
          <Image
            src="/assets/images/features/analyze-reviews/browser.svg"
            alt="Reports section of reviewshake with a metrics overview"
            width={382}
            height={265}
            priority
          />
        }
        review={{
          title:
            '"Feature we use and appreciate is reports. You can make client, team meetings and show the reports in a visual way, dynamically changing the date range."',
          reviewer: {
            reviewerName: 'Goran M',
            reviewLink:
              'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4618657',
            position: 'General manager, SMB',
          },
        }}
      />
      {CONTENT.map((content, index) => (
        <ContentImageSection
          key={index}
          imageOnRight={index % 2 === 0}
          {...(index === 0 && {
            descriptionMaxWidth: { _: 280, md: 644, lg: 823 },
          })}
          {...(index === 6 && {
            descriptionMaxWidth: { lg: 885 },
          })}
          {...content}
          css={
            index === 0 &&
            css`
              padding-bottom: 0;
              overflow: hidden;
              > div > div > div:nth-child(2) {
                position: relative;
                height: 90vw;
                width: 100%;
                margin-bottom: -40vw;
                img {
                  color: transparent;
                  position: absolute;
                  top: 0;
                  left: -100px;
                  right: -100px;
                  max-width: unset;
                  width: calc(100vw + 160px);
                }
                ${({ theme }) =>
                  theme.mediaQueries('md')(css`
                    margin-bottom: -350px;
                    img {
                      width: calc(100% + 200px);
                    }
                  `)};
                ${({ theme }) =>
                  theme.mediaQueries('lg')(css`
                    max-height: 920px;
                    img {
                      width: 120%;
                    }
                  `)};
              }
            `
          }
        />
      ))}
      <Section backgroundColor="gray" pt={0}>
        <Partners />
      </Section>
    </>
  );
};

export default AnalyzeReviewsPage;
