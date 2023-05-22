import Image from 'next/image';
import HeroFeatures from '@/components/reusable/hero-features/HeroFeatures';
import { ContentImageSectionType } from '@/components/route/generate-reviews/GenerateReviewsPage';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';

const CONTENT: ContentImageSectionType[] = [
  {
    backgroundColor: 'gray',
    title: '360 degree view of your reputation',
    description:
      'Choose from more than 85 review sources, like Google, Facebook, Yelp of Tripadvisor. Once you add a review source, you will see all the reviews in our dashboard in a few minutes.',
    image: {
      src: 'manage-reviews/360-degree.svg',
      alt: 'Sample from 85+ review sources',
      width: 518,
      height: 426,
    },
  },
  {
    backgroundColor: 'white',
    title: 'Stay on top of your reviews',
    description:
      '"Keep a 100% response rate by getting notified of new reviews and seeing reviews that have not been answered. Respond directly from Reviewshake to Google reviews.',
    image: {
      src: 'manage-reviews/stay-on-top.png',
      alt: 'Review response',
      width: 585,
      height: 356,
    },
  },
  {
    backgroundColor: 'gray',
    title: 'Share your insights with your team',
    description:
      'Give individual access to your employees to track and manage reviews, so that the entire company is on top of their online reputation.',
    image: {
      src: 'manage-reviews/share-insights.png',
      alt: 'Team connections in your business',
      width: 548,
      height: 398,
    },
  },
  {
    backgroundColor: 'lightBlueBg',
    title: 'Have a better understanding with personalized reports',
    description:
      'Use our powerful reporting tool to create your own reports, sent daily, weekly or monthly over email. Share them with your team to inform your marketing and growth strategy',
    image: {
      src: 'manage-reviews/reports.svg',
      alt: 'Reporting tool',
      width: 577,
      height: 283,
    },
  },
];

const ManageReviewsPage = () => {
  return (
    <>
      <HeroFeatures
        title="Stay on top of your reviews from 85+ review sites"
        description="Knowing the online perception about your brand, products or services allows you to take the right steps to improve your reputation and get more business."
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
          title: '"I like how it monitors for new reviews that come in and sends me an email"',
          reviewer: {
            reviewerName: 'Mike C',
            reviewLink:
              'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-4627207',
            position: 'Software developer, Small Business',
            photo: 'mike',
          },
        }}
      />
      {CONTENT.map((content, index) => (
        <ContentImageSection key={index} {...content} imageOnRight={index % 2 === 0} />
      ))}
    </>
  );
};

export default ManageReviewsPage;
