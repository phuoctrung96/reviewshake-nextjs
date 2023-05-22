import Flex from '@/components/reusable/flex/Flex';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Text from '@/components/reusable/text/Text';
import { SpaceProps } from 'styled-system';
import { Property } from 'csstype';
import { StyledHeroCardBox } from './heroCta.styles';

export type HeroCtaType = {
  justifyContent?: Property.JustifyContent;
};

const HeroCta = ({ justifyContent = 'flex-start', ...props }: HeroCtaType & SpaceProps) => {
  return (
    <StyledHeroCardBox $justifyContent={justifyContent} {...props}>
      <Flex
        flexDirection={{ _: 'column', lg: 'row' }}
        justifyContent={justifyContent}
        flexWrap="wrap"
        mt={{ _: 24, md: 42, lg: 40 }}
        mb={{ _: 12, lg: 9 }}
      >
        <BaseLink
          href="https://app.reviewshake.com/signup"
          mb={{ _: '0.7777em', lg: 0 }}
          mr={{ lg: '0.6667em' }}
          external
        >
          Try free for 14 days
        </BaseLink>
        <BaseLink
          href="https://calendly.com/reviewshake-product/30min"
          external
          viewType="secondary"
        >
          Contact Sales
        </BaseLink>
      </Flex>
      <Text viewType="secondary" textAlign="center" m={0} fontSize="1.4rem">
        No credit card required
      </Text>
    </StyledHeroCardBox>
  );
};

export default HeroCta;
