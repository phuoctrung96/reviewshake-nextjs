import Flex from '@/components/reusable/flex/Flex';
import Text from '@/components/reusable/text/Text';
import StarsRating from '@/components/reusable/stars-rating/StarsRating';
import AirbnbSquare from '@/components/reusable/icons/AirbnbSquare';
import YelpSquare from '@/components/reusable/icons/YelpSquare';
import FacebookSquare from '@/components/reusable/icons/FacebookSquare';
import GoogleSquare from '@/components/reusable/icons/GoogleSquare';
import AmazonSquare from '@/components/reusable/icons/AmazonSquare';
import { StyledIconWrapper } from '@/components/reusable/tabs/TabsReviewSummary/tabsReviewSummary.styles';

const TabsReviewSummary = () => {
  return (
    <Flex m={'20px 20px'} border="1px solid #E6E6EA" borderRadius={6} padding={20}>
      <Flex flexDirection="column">
        <Text fontSize={'3.6rem'} lineHeight={1.35} m={0} fontWeight={600}>
          4.7
        </Text>
        <Text m={'0 0 1rem'} fontSize={'1.6rem'}>
          Based on 4070 reviews
        </Text>
        <StarsRating rating={4.66} />
      </Flex>
      <StyledIconWrapper flex={1} justifyContent="flex-end">
        <AirbnbSquare />
        <YelpSquare />
        <FacebookSquare />
        <GoogleSquare />
        <AmazonSquare />
      </StyledIconWrapper>
    </Flex>
  );
};

export default TabsReviewSummary;
