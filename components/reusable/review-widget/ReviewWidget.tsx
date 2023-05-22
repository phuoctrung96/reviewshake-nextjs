import { useRef } from 'react';
import HeadingBase from '@/components/reusable/heading/Heading';
import { useScript } from '@/hooks/useScript';
import Flex from '@/components/reusable/flex/Flex';
import { StyledDiv } from './reviewWidget.styles';

const attributesMap = new Map<string, string>();
attributesMap.set(
  'data-token',
  'eyJhbGciOiJIUzI1NiJ9.eyJ0ZW5hbnQiOiJtZSIsImhvc3QiOiJtZS5yZXZpZXdzaGFrZS5jb20iLCJzdG9yZSI6MSwid2lkZ2V0Ijo3LCJpYXQiOjE2NjI1Mjg4MTR9.YAba1F8gmdMlKG9BDrGYczNoT3ZLuc_okusv8nl09Kw'
);
attributesMap.set('data-id', '7');

const ReviewsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useScript('https://me.reviewshake.com/widget-embed.js', attributesMap, ref);

  return (
    <Flex flexDirection="column">
      <Flex>
        <HeadingBase as="h2" mb={{ _: '4rem', md: '7rem', lg: '7rem' }} fontSize={{ lg: '4.8rem' }}>
          What people are saying about us
        </HeadingBase>
      </Flex>
      <StyledDiv ref={ref}>
        <div id="review-widget-7"></div>
      </StyledDiv>
    </Flex>
  );
};

export default ReviewsSection;
