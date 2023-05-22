import { TabReviewType } from '@/components/reusable/tabs/TabsReviewSlider/TabsReviewSlider';
import Flex from '@/components/reusable/flex/Flex';
import Quote from '@/components/reusable/icons/Quote';
import Text from '@/components/reusable/text/Text';
import theme from '@/styled/theme.styles';
import StarsRating from '@/components/reusable/stars-rating/StarsRating';
import { formatDate } from '@/utils/formatDate';
import { StyledIconWrapper } from '@/components/reusable/tabs/TabsReviewQuotes/tabsReviewQuotes.styles';
import TabsImage from '@/components/reusable/tabs/TabsImage/TabsImage';

const TabsReviewQuotes = ({ content, isLast }: TabReviewType & { isLast: boolean }) => {
  const { name, description, image, rating, date, icon } = content;

  return (
    <Flex flex={'1 1 100%'} margin={isLast ? '0 2.5rem' : '0 2.5rem 3.5rem'} flexDirection="column">
      <Quote style={{ fill: '#9e9eb9', maxWidth: '50px' }} />

      <Text
        m={'.5rem 0 1.5rem'}
        fontSize={'1.5rem'}
        lineHeight={'2.4rem'}
        textAlign={{ _: 'center', s: 'left' }}
      >
        {description}
      </Text>

      <Flex alignItems={{ _: 'center', s: 'flex-start' }} flexDirection={{ _: 'column', s: 'row' }}>
        <TabsImage image={image} maxWidth={46} />
        <Flex flexDirection="column" m={{ _: '1rem 0 0', s: '0 0 0 1.3rem' }}>
          <Flex alignItems="center" justifyContent={{ _: 'center', s: 'flex-start' }} mb={'.2rem'}>
            <Text
              m={'0 .7rem 0 0'}
              fontSize="1.8rem"
              lineHeight="2.4rem"
              fontWeight={600}
              color={theme.colors.black}
            >
              {name}
            </Text>
            {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
          </Flex>
          <Flex alignItems="center">
            <StarsRating rating={rating} />
            <Text m={'0 0 0 1rem'} fontSize={'1.6rem'} lineHeight={'2.1rem'}>
              {formatDate(new Date(date))}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default TabsReviewQuotes;
