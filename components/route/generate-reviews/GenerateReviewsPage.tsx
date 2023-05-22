import { ReactNode } from 'react';
import { SectionBackgroundColorsType } from '@/components/reusable/section/Section';
import BoostSocialProof from '@/components/reusable/boost-social-proof/BoostSocialProof';
import { ImageType } from '@/types/general';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';
import HeroFeatures from '@/components/reusable/hero-features/HeroFeatures';
import ExperienceCard from '@/components/reusable/experience-card/ExperienceCard';
import { ResponsiveValue, TLengthStyledSystem } from 'styled-system';
import { Property } from 'csstype';

export type ContentImageSectionType = {
  backgroundColor: SectionBackgroundColorsType;
  preTitle?: string;
  title: string;
  description: string | string[];
  image?: ImageType;
  content?: ReactNode;
  imageMaxWidth?: ResponsiveValue<Property.MaxWidth<TLengthStyledSystem>>;
  imageMobile?: Omit<ImageType, 'alt'>;
  centered?: ContentCenteredType;
  cta?: {
    href: string;
    label: string;
  };
  video?: {
    src: string;
  };
};

export type ContentCenteredType = 'toTablet' | 'all' | 'default';

const CONTENT: ContentImageSectionType[] = [
  {
    backgroundColor: 'white',
    title: 'Send review invites',
    description:
      'Use our automatically generated landing page to request reviews from your current and former customers. You can easily add 85+ review sources. It takes just a few clicks and 30 seconds to leave a review.',
    video: {
      src: 'Animation03.mp4',
    },
  },
  {
    backgroundColor: 'gray',
    title: 'Create templates without a hitch',
    description:
      'Our easy to use tools allow you to make your own beautiful email and SMS templates. You can add customer info (like name, email), and make it visually appealing by adding visuals or changing colors. You can even choose to send the invites from your own email address',
    image: {
      src: 'templates.svg',
      alt: 'Templating possibilities: Layout, Themes, Code your own',
      width: 577,
      height: 487,
    },
  },
  {
    backgroundColor: 'lightBlueBg',
    title: 'Run your own campaigns',
    description:
      'Our powerful drip campaigns enable you to send review requests on email and SMS. Add automated reminds for customers that haven’t left a review to make sure that no one misses your requests.',
    image: {
      src: 'campaigns.svg',
      alt: 'Campaign outline',
      width: 623,
      height: 134,
    },
    imageMobile: {
      src: 'campaigns-mobile.svg',
      width: 147,
      height: 456,
    },
    centered: 'toTablet',
  },
  {
    backgroundColor: 'gray',
    title: 'Seamlessly add customers to campaigns',
    description:
      'Do you want to send campaigns to your existing customers? We make it easy with CSV imports, API access or Zapier integrations.',
    image: {
      src: 'add-customers.svg',
      alt: 'Campaign flow overview',
      width: 623,
      height: 134,
    },
  },
  {
    backgroundColor: 'white',
    title: 'Funnel analytics',
    description:
      'Understand how your campaigns are performing with our funnel analytics. Use these metrics to measure efficiency and optimize your campaigns.',
    image: {
      src: 'funnel-analytics.svg',
      alt: 'Funnel analytics overview',
      width: 364,
      height: 306,
    },
  },
  {
    backgroundColor: 'gray',
    title: 'Invite your users with an opt-in form',
    description:
      'Do you want an even easier way to send review requests to customers? Use our opt-in form on a tablet at your establishment to sign them up to campaigns.',
    image: {
      src: 'opt-in-form.svg',
      alt: 'Opt-in form',
      width: 577,
      height: 414,
    },
  },
];
const GenerateReviewsPage = () => {
  return (
    <>
      <HeroFeatures
        title="Generate reviews on auto-pilot"
        description="Online reviews are core to your brand awareness. Get more reviews faster with Reviewshake on 85+ websites, boost your social proof and increase your revenue."
        rightContent={
          <>
            <ExperienceCard experience="good" mr={{ _: 11.75 }} />
            <ExperienceCard experience="bad" />
          </>
        }
        review={{
          title: '"We have generated over 2,000 reviews for our clients using Reviewshake."',
          reviewer: {
            reviewerName: 'Eric D',
            reviewLink:
              'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5197498',
            position: 'Founder & CEO, Small Business',
            photo: 'Eric D',
          },
        }}
      />
      {CONTENT.map((content, index) => (
        <ContentImageSection key={index} {...content} imageOnRight={index % 2 !== 0} />
      ))}
      <BoostSocialProof youtubeVideoId="wxNdMs4OhL8" />
    </>
  );
};

export default GenerateReviewsPage;
