import BaseLink from '@/components/reusable/base-link/BaseLink';
import Container from '@/components/reusable/container/Container';
import HeadingBase from '@/components/reusable/heading/Heading';
import Section from '@/components/reusable/section/Section';
import Text from '@/components/reusable/text/Text';

const SeeInAction = () => {
  return (
    <Section backgroundColor="blackBg">
      <Container>
        <HeadingBase
          as="h2"
          color="white"
          fontSize={{ lg: '4.8rem' }}
          mb={{ _: '0.6em', md: '0.5625em', lg: '0.375em' }}
        >
          Ready to see Reviewshake in action?
        </HeadingBase>
        <Text
          textAlign="center"
          color="white"
          maxWidth={{ md: 450, lg: 639 }}
          mb={{ _: '2em', md: '2.2778em', lg: '1.4em' }}
          mt="0"
          mx={{ _: 'auto' }}
          opacity="0.8"
        >
          A complete toolkit for smart companies that want to make online reviews work for them.
        </Text>
        <BaseLink href="https://app.reviewshake.com/signup" external mx={{ _: 'auto' }}>
          Try free
        </BaseLink>
      </Container>
    </Section>
  );
};

export default SeeInAction;
