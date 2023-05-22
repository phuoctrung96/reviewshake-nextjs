import G2 from '@/components/reusable/icons/G2';
import { StyledReviewdOnText } from './reviewedOn.styles';
import Link from 'next/link';

const reviewServices = {
  g2: <G2 />,
};

export type ReviewedOnType = {
  reviewService: ReviewServiceType;
  reviewLink?: string;
  className?: string;
};

export type ReviewServiceType = keyof typeof reviewServices;

const ReviewedOn = ({ reviewService, reviewLink, className = '' }: ReviewedOnType) => {
  return (
    <StyledReviewdOnText
      className={className}
      fontSize={{ _: '1.4rem' }}
      mt={{ _: '1.9286em', lg: '1.2143em' }}
      mb={0}
    >
      {reviewLink ? (
        <Link href={reviewLink} target="_blank" rel="noopener noreferrer">
          Reviewed on {reviewServices[reviewService]}
        </Link>
      ) : (
        <>Reviewed on {reviewServices[reviewService]}</>
      )}
    </StyledReviewdOnText>
  );
};

export default ReviewedOn;
