import { TabReviewType } from '@/components/reusable/tabs/TabsReviewSlider/TabsReviewSlider';
import StarsRating from '@/components/reusable/stars-rating/StarsRating';
import Text from '@/components/reusable/text/Text';
import theme from '@/styled/theme.styles';
import { formatDate } from '@/utils/formatDate';
import Flex from '@/components/reusable/flex/Flex';
import TabsImage from '@/components/reusable/tabs/TabsImage/TabsImage';

const TabsReviewCarousel = ({ content }: TabReviewType) => {
  const { name, description, image, rating, date, icon } = content;

  return (
    <Flex margin={'0 25px'} flexDirection="column" alignItems="center">
      <StarsRating rating={rating} />
      <Text m={'1.6rem 0 2.4rem'} fontSize={'1.5rem'} lineHeight={'2.4rem'} textAlign="center">
        {description}
      </Text>
      <TabsImage image={image} maxWidth={70} icon={icon} />
      <Text
        m={'.7rem 0 .5rem'}
        fontSize="1.8rem"
        lineHeight="2.4rem"
        fontWeight={600}
        color={theme.colors.black}
      >
        {name}
      </Text>
      <Text m={'0'} fontSize={'1.6rem'} lineHeight={'2.1rem'}>
        {formatDate(new Date(date))}
      </Text>
    </Flex>
  );
};

export default TabsReviewCarousel;
