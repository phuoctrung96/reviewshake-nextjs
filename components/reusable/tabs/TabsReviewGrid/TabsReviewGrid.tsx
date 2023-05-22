import { TabReviewType } from '@/components/reusable/tabs/TabsReviewSlider/TabsReviewSlider';
import Flex from '@/components/reusable/flex/Flex';
import Image from 'next/image';
import Text from '@/components/reusable/text/Text';
import StarsRating from '@/components/reusable/stars-rating/StarsRating';
import { formatDate } from '@/utils/formatDate';
import theme from '@/styled/theme.styles';
import { StyledIconWrapper } from '@/components/reusable/tabs/TabsReviewGrid/tabsReviewGrid.styles';
import TabsImage from '@/components/reusable/tabs/TabsImage/TabsImage';

const TabsReviewGrid = ({ content, isLast }: TabReviewType & { isLast: boolean }) => {
  const { name, description, image, rating, date, icon } = content;

  return (
    <Flex
      flex={1}
      margin={isLast ? '0 2.5rem' : { _: '0 2.5rem 5rem', md: '0 2.5rem' }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <TabsImage image={image} maxWidth={100} />
      <Text m={'1rem 0 1.5rem'} fontSize={'1.5rem'} lineHeight={'2.4rem'} textAlign="center">
        {description}
      </Text>
      <StarsRating rating={rating} />
      <Text m={'.5rem 0 1rem 0'} fontSize={'1.6rem'} lineHeight={'2.1rem'}>
        {formatDate(new Date(date))}
      </Text>
      <Text
        m={'0 0 1rem'}
        fontSize="1.8rem"
        lineHeight="2.4rem"
        fontWeight={600}
        color={theme.colors.black}
      >
        {name}
      </Text>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
    </Flex>
  );
};

export default TabsReviewGrid;
