import { ContentImageSectionType } from '@/components/route/generate-reviews/GenerateReviewsPage';
import Image from 'next/image';
import { StyledHeroFeaturesInbox } from './Inbox.styles';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';

const CONTENT: ContentImageSectionType[] = [
  {
    backgroundColor: 'white',
    title: 'Increase customer loyalty with 2-way SMS',
    description:
      'SMS campaigns for review invitations is one of the most used Reviewshake features. Now we are taking this a step forward: you will be able to see all the customer replies to SMS and reply back. Engaging customers in 1-on-1 conversations will result in increased customer loyalty and reputation.',
    image: {
      src: 'inbox/2-way-sms.svg',
      alt: 'Communication with customer via SMS',
      width: 556,
      height: 413,
    },
    cta: {
      href: 'https://app.reviewshake.com/signup',
      label: 'Try free',
    },
  },
  {
    backgroundColor: 'gray',
    title: 'Improve your Reputation with Private Feedback',
    description:
      'Did your customers leave you private feedback instead of a public review? Engage with them from the Inbox. Make sure that they are heard and turn their feedback into valuable insights.',
    image: {
      src: 'inbox/private-feedback.svg',
      alt: 'Private feedback',
      width: 496,
      height: 361,
    },
    cta: {
      href: 'https://app.reviewshake.com/signup',
      label: 'Try free',
    },
  },
  {
    backgroundColor: 'lightBlueBg',
    title: 'Get a dedicated number for Reviewshake only',
    description:
      'Activating the Inbox means that you will have your dedicated phone number. All review requests and outgoing SMS will be sent from this number.',
    image: {
      src: 'inbox/dedicated-number.svg',
      alt: 'Private feedback',
      width: 621,
      height: 226,
    },
  },
];

const InboxPage = () => {
  return (
    <>
      <StyledHeroFeaturesInbox
        title="Build customer relationships with Inbox"
        description="Using our new Inbox feature, you can see all the communications between you and your customers: review request, private feedback and SMS replies in a neat timeline. Stay on top of each customer interaction and engage rapidly with them."
        rightContent={
          <Image
            src="/assets/images/features/inbox/inbox-hero.svg"
            alt="Reviewshake inbox, chat with customers"
            width={352}
            height={234}
            priority
          />
        }
        review={{
          title:
            '"We are getting honest feedback from clients about their experience with us. It\'s not always positive feedback, but it\'s provided an opportunity for us to recognise ways we can provide a better service."',
          reviewer: {
            reviewerName: 'Brad C',
            reviewLink:
              'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5203050',
            position: 'Director, Small business',
            photo: 'Brad C',
          },
        }}
      />
      {CONTENT.map((content, index) => (
        <ContentImageSection key={index} imageOnRight={index % 2 !== 0} {...content} />
      ))}
    </>
  );
};

export default InboxPage;
