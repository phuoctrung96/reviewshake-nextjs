import { TabReviewType } from '@/components/reusable/tabs/TabsReviewSlider/TabsReviewSlider';
import Flex from '@/components/reusable/flex/Flex';
import Text from '@/components/reusable/text/Text';
import theme from '@/styled/theme.styles';
import StarsRating from '@/components/reusable/stars-rating/StarsRating';
import { formatDate } from '@/utils/formatDate';
import TabsImage from '@/components/reusable/tabs/TabsImage/TabsImage';

const TabsReviewList = ({ content, isLast }: TabReviewType & { isLast: boolean }) => {
  const { name, description, image, rating, date, icon } = content;

  return (
    <Flex flex={'1 1 100%'} margin={isLast ? '0 2.5rem' : '0 2.5rem 3.5rem'} flexDirection="column">
      <Flex alignItems="flex-start" flexDirection={{ _: 'column', s: 'row' }}>
        <TabsImage image={image} maxWidth={50} icon={icon} />
        <Flex flexDirection="column" m={{ _: '1rem 0 0', s: '0 0 0 1.7rem' }}>
          <Flex alignItems="center" mb={'.2rem'}>
            <Text
              m={'0 .7rem 0 0'}
              fontSize="1.8rem"
              lineHeight="2.4rem"
              fontWeight={600}
              color={theme.colors.black}
            >
              {name}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <StarsRating rating={rating} />
            <Text m={'0 0 0 1rem'} fontSize={'1.6rem'} lineHeight={'2.1rem'}>
              {formatDate(new Date(date))}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Text
        m={{ _: '.5rem 0 1.5rem', s: '1rem 0 1.5rem' }}
        fontSize={'1.5rem'}
        lineHeight={'2.4rem'}
      >
        {description}
      </Text>
    </Flex>
  );
};

export default TabsReviewList;
