import HeadingBase from '@/components/reusable/heading/Heading';
import { StyledFormWrapper } from '@/components/route/pricing/pricing.styles';
import Grid from '@/components/reusable/grid/Grid';
import Input from '@/components/reusable/input/Input';
import BaseButton from '@/components/reusable/base-button/BaseButton';
import Container from '@/components/reusable/container/Container';
import Text from '@/components/reusable/text/Text';

const StartingReviewBusiness = () => {
  return (
    <Container>
      <HeadingBase
        as="h2"
        fontSize={{ _: '3.2rem', md: '4.8rem' }}
        mb={{ _: '1.2rem', md: '1.2rem', lg: '1.8rem' }}
      >
        Starting a review management business?
      </HeadingBase>
      <Text
        mt={0}
        mb={{ _: '4rem', md: '5rem', lg: '7rem' }}
        maxWidth={{ _: 'unset', md: 550, lg: 625 }}
        mx="auto"
        textAlign="center"
      >
        Download our comprehensive guide and learn how. Get all information you need to succeed with
        our white label plan.
      </Text>
      <StyledFormWrapper maxWidth="700px" mx={'auto'}>
        <Grid
          flex={1}
          gridGap={{ _: '2.4rem', md: '3rem', lg: '3.2rem' }}
          gridTemplateColumns={{ _: '1fr', md: '1fr 1fr' }}
        >
          <Input label="Full name" name="fullName" placeholder="Type your name" required />
          <Input label="Email" name="email" type="email" placeholder="Type your email" required />
          <Input label="Phone" name="phone" type="tel" placeholder="Type your phone number" />
          <Input label="Website" name="website" placeholder="Paste the link to your website" />
          <BaseButton>Download</BaseButton>
        </Grid>
      </StyledFormWrapper>
    </Container>
  );
};

export default StartingReviewBusiness;
