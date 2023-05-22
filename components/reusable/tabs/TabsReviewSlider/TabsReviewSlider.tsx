import { TABS_CONTENT } from '@/components/reusable/tabs/tabsData';
import Flex from '@/components/reusable/flex/Flex';
import Image from 'next/image';
import { formatDate } from '@/utils/formatDate';
import StarsRating from '@/components/reusable/stars-rating/StarsRating';
import Text from '@/components/reusable/text/Text';
import theme from '@/styled/theme.styles';
import TabsImage from '@/components/reusable/tabs/TabsImage/TabsImage';

export type TabReviewType = { content: typeof TABS_CONTENT[0] };

const TabsReviewSlider = ({ content }: TabReviewType) => {
  const { name, description, image, rating, date, icon } = content;

  return (
    <Flex margin={'0 25px'} flexDirection="column">
      <Flex alignItems={{ _: 'center', s: 'flex-start' }} flexDirection={{ _: 'column', s: 'row' }}>
        <TabsImage image={image} maxWidth={60} icon={icon} />
        <Flex flexDirection="column" ml={{ _: 0, s: '1.4rem' }} mt={{ _: '1rem', s: 0 }}>
          <Text
            m={'0 0 0.5rem'}
            fontSize="1.8rem"
            lineHeight="2.4rem"
            fontWeight={600}
            color={theme.colors.black}
          >
            {name}
          </Text>
          <Flex
            justifyContent="flex-start"
            alignItems={{ _: 'center', md: 'flex-start', lg: 'center' }}
            flexDirection={{ _: 'column', s: 'row', md: 'column', lg: 'row' }}
          >
            <StarsRating rating={rating} />
            <Text
              m={{ _: '.7rem 0 0', s: '0 0 0 .7rem', md: '.5rem 0 0', lg: '0 0 0 .7rem' }}
              fontSize={{ _: '1.6rem', md: '1.4rem', lg: '1.6rem' }}
              lineHeight={'2.1rem'}
            >
              {formatDate(new Date(date))}
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <hr style={{ margin: ' 17px 0 13px', borderTop: '1px solid #e6e6ea' }} />

      <Text m={0} fontSize={'1.5rem'} lineHeight={'2.4rem'} textAlign={{ _: 'center', s: 'left' }}>
        {description}
      </Text>
    </Flex>
  );
};

export default TabsReviewSlider;
