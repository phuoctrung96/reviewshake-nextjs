import HeadingBase from '@/components/reusable/heading/Heading';
import { PricingDataType } from '@/components/route/pricing/pricingData';
import Text from '@/components/reusable/text/Text';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import { StyledPricingCardBox } from './pricingCard.styles';
import Tag from '@/components/reusable/tag/Tag';
import Price from '@/components/reusable/price/Price';
import BaseButton from '@/components/reusable/base-button/BaseButton';
import { StyledPricingUl } from '@/components/reusable/price/price.styles';
import Box from '@/components/reusable/box/Box';
import ListItem from '@/components/reusable/list-item/ListItem';

type PricingCardProps = {
  scrollToFeatures?: () => void;
  moreFeaturesLink?: string;
  isMonthly: boolean;
};

const PricingCard = ({
  shortTitle,
  description,
  monthlyPrice,
  monthlyPriceYearlyPayment,
  yearlyPrice,
  keyFeatures,
  color,
  bgColor,
  scrollToFeatures,
  moreFeaturesLink,
  tryFreeLink,
  isMonthly,
}: PricingCardProps & PricingDataType) => {
  return (
    <StyledPricingCardBox
      backgroundColor="white"
      border="1px solid #E0E0E0"
      p={{ _: 20, md: '2.4rem 1rem', lg: '2.6rem 2.5rem' }}
      borderRadius={6}
      mx={{ _: 'auto' }}
    >
      <HeadingBase
        as="h2"
        fontSize={{ _: '2.6rem', md: '1.8rem', lg: '2.6rem' }}
        mb={{ _: '1.6rem', md: '1.6rem', lg: '1.6rem' }}
      >
        {shortTitle}
      </HeadingBase>
      <Tag color={color} bgColor={bgColor}>
        {description}
      </Tag>
      <Price
        price={isMonthly ? monthlyPrice : monthlyPriceYearlyPayment}
        mt={{ _: '2rem', md: '2.4rem', lg: '3.6rem' }}
        mb={0}
        textAlign="center"
      />
      <Text
        textAlign="center"
        fontSize={{ _: '1.6rem' }}
        mt={{ _: '1.4rem', lg: '2.6rem' }}
        mb={{ _: '2.8rem', md: '2.4rem', lg: '3.6rem' }}
        color="grayDarkText"
        fontWeight={500}
      >
        {isMonthly ? 'Billed monthly' : `$${yearlyPrice} billed annually`}
      </Text>
      <BaseLink
        href={tryFreeLink}
        mx={{ _: 'auto' }}
        fontSize={{ _: '1.8rem', md: '1.6rem', lg: '1.8rem' }}
        lineHeight={{ _: '6rem', md: '4.9rem' }}
        height={{ _: '6rem', md: '4.9rem' }}
      >
        Try free
      </BaseLink>
      <Text
        textAlign="center"
        mt={{ _: '1.2rem' }}
        mb={{ _: '3rem', lg: '3.8rem' }}
        fontSize={{ _: '1.6rem', md: '1.5rem' }}
        lineHeight={{ _: 1.375 }}
      >
        or see{' '}
        {scrollToFeatures && (
          <BaseButton viewType="text" onClick={scrollToFeatures}>
            more features
          </BaseButton>
        )}
        {moreFeaturesLink && (
          <BaseLink viewType="text" href={moreFeaturesLink}>
            more features
          </BaseLink>
        )}
      </Text>
      <StyledPricingUl>
        {keyFeatures.map((feature, index) => (
          <ListItem key={index}>{feature}</ListItem>
        ))}
      </StyledPricingUl>
      <Box backgroundColor="#F0F0F0"></Box>
    </StyledPricingCardBox>
  );
};

export default PricingCard;
