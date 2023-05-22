import Author from '@/components/reusable/author/Author';
import Text from '@/components/reusable/text/Text';
import { StyledDiv, StyledQuotationMarks, StyledReviewedOn } from './reviews.styles';

export type ReviewType = {
  title: string;
  reviewer: ReviewerType;
};

type ReviewerType = {
  reviewerName: string;
  position: string;
  reviewLink: string;
  photo?: 'Brad C' | 'Eric D' | 'mike';
};

const Review = ({ title, reviewer }: ReviewType) => {
  return (
    <StyledDiv>
      <StyledQuotationMarks />
      <Text
        fontWeight={'700'}
        mt={{ _: '.5em', md: '1.4444em', lg: '1.75em' }}
        mb={{ _: '1.8em', md: '1.4444em', lg: '1.35em' }}
      >
        {title}
      </Text>
      <Author
        authorName={reviewer.reviewerName}
        description={reviewer.position}
        photoFilename={reviewer.photo}
        viewType="review"
      />
      <StyledReviewedOn reviewService="g2" reviewLink={reviewer.reviewLink} />
    </StyledDiv>
  );
};

export default Review;
