import { Fragment, ReactNode } from 'react';
import Hero from '@/components/reusable/hero/Hero';
import Container from '@/components/reusable/container/Container';
import Review from '@/components/reusable/review/Review';
import Partners from '@/components/reusable/partners/Partners';
import Section from '@/components/reusable/section/Section';
import BaseLink from '@/components/reusable/base-link/BaseLink';
import Image from 'next/image';
import Box from '@/components/reusable/box/Box';
import Flex from '@/components/reusable/flex/Flex';
import Text from '@/components/reusable/text/Text';
import { ComparisonFeaturesType, ComparisonPageType } from './comparisonPagesData';
import HeadingBase from '@/components/reusable/heading/Heading';
import FeatureCheck from '@/components/reusable/icons/FeatureCheck';
import Info from '@/components/reusable/icons/Info';
import LearnAboutPricing from '@/components/reusable/learn-about-pricing/LearnAboutPricing';
import ProsConsTable from '@/components/reusable/pros-cons-table/ProsConsTable';

const ComparisonPageLayout = ({
  comparisonPageData,
  content,
}: {
  comparisonPageData: ComparisonPageType;
  content?: ReactNode;
}) => {
  const {
    title,
    companyName,
    reviewshakePros,
    reviewshakeCons,
    comparedCompanyLogo,
    comparedCompanyPros,
    comparedCompanyCons,
    reviewshakeStartingPlanPrice,
    comparedCompanyStartingPlanPrice,
    reviewshakeComparisonFeatures,
    comparedCompanyComparisonFeatures,
  } = comparisonPageData;
  return (
    <>
      <Hero
        title={title}
        description={`Learn how Reviewshake compares to ${companyName}, and make the switch today.`}
        descriptionMaxWidth={{ _: 'unset', md: '60%', lg: 'unset' }}
      />
      <Section backgroundColor="lightBlueBg" pt={0}>
        <Container pt={{ _: 50, md: 66, lg: 80 }} pb={{ _: 48, md: 38, lg: 68 }}>
          <Review
            title="“We started using Reviewshake around 3 years ago to replace our old provider, Grade US. We wanted a solution that was more cost-effective with all the same features. Reviewshake gave us this and more.”"
            reviewer={{
              reviewerName: 'Eric D',
              reviewLink:
                'https://www.g2.com/products/reviewshake/reviews/reviewshake-review-5197498',
              position: 'Founder & CEO, Small Business',
              photo: 'Eric D',
            }}
          />
        </Container>
        <Partners />
        <Container pt={{ _: 50, md: 70, lg: 80 }}>
          <BaseLink href="https://app.reviewshake.com/signup" external mx="auto">
            Try Reviewshake for free
          </BaseLink>
        </Container>
      </Section>

      <Section backgroundColor="gray">
        <Container>{content}</Container>
      </Section>

      <Section backgroundColor="white">
        <Container>
          <Flex justifyContent="center" maxWidth={{ _: '212px', md: '282px' }} mx="auto">
            <Image
              src="/assets/images/reviewshake-logo.svg"
              width={382}
              height={86}
              alt="Reviewshake logo"
            />
          </Flex>
          <ProsConsTable pros={reviewshakePros} cons={reviewshakeCons} hasCta />
        </Container>
      </Section>

      <Section backgroundColor="gray">
        <Container>
          <Flex
            justifyContent="center"
            maxWidth={{ _: '212px', md: '282px' }}
            height={{ _: '48px', md: '63px' }}
            mx="auto"
            position="relative"
            flex={1}
          >
            <Image
              src={`/assets/images/comparison/${comparedCompanyLogo.src}`}
              alt={comparedCompanyLogo.alt}
              fill
              style={{ objectFit: 'contain' }}
            />
          </Flex>
          <Flex mt={{ _: '4rem' }} flexWrap="wrap">
            <ProsConsTable pros={comparedCompanyPros} cons={comparedCompanyCons} dark />
          </Flex>
        </Container>
      </Section>

      <Section backgroundColor="white">
        <Container>
          <HeadingBase as="h2" maxWidth={{ _: 275, md: 'unset' }}>
            More features, less price
          </HeadingBase>
          <Flex
            justifyContent={{ _: 'center' }}
            backgroundColor="#F0F0F0"
            borderRadius={6}
            flexDirection={{ _: 'column', md: 'row' }}
            p={{ _: '3.6rem 1.6rem', md: '4.4rem 0', lg: '5rem 0 7.5rem' }}
          >
            <Flex
              borderBottom={{ _: '1px solid #DDDBDB', md: 'none' }}
              borderRight={{ md: '2px solid #DDDBDB' }}
              flex={{ _: '1' }}
              flexDirection={{ _: 'column' }}
              pb={{ _: '3.6rem', md: 'unset' }}
              justifyContent={{ _: 'center' }}
              alignItems={{ _: 'center' }}
            >
              <Flex justifyContent="center" maxWidth={{ _: '212px', md: '282px' }} mx="auto">
                <Image
                  src="/assets/images/reviewshake-logo.svg"
                  width={191}
                  height={43}
                  alt="Reviewshake logo"
                />
              </Flex>
              <Text
                color="grayDarkText"
                m={{ _: '2.7rem 0 0' }}
                fontSize={{ _: '1.8rem', md: '1.6rem' }}
                fontWeight={600}
              >
                Plans starting from
              </Text>
              <Text
                color={
                  typeof comparedCompanyStartingPlanPrice === 'string'
                    ? 'greenDarkBg'
                    : reviewshakeStartingPlanPrice < comparedCompanyStartingPlanPrice
                    ? 'greenDarkBg'
                    : 'red'
                }
                fontWeight={600}
                fontSize={{ _: '2.7rem', lg: '3.6rem' }}
                lineHeight={{ _: '2.7rem' }}
                m={{ _: '2.4rem 0 0' }}
              >
                ${reviewshakeStartingPlanPrice}/month
              </Text>
            </Flex>
            <Flex
              justifyContent={{ _: 'center' }}
              flex={{ _: '1' }}
              pt={{ _: '3.6rem', md: 'unset' }}
              flexDirection={{ _: 'column' }}
              alignItems={{ _: 'center' }}
            >
              <Flex
                justifyContent="center"
                width={{ _: '212px', md: '282px' }}
                height="43px"
                mx="auto"
                position="relative"
              >
                <Image
                  src={`/assets/images/comparison/${comparedCompanyLogo.src}`}
                  alt={comparedCompanyLogo.alt}
                  fill={true}
                  style={{ objectFit: 'contain' }}
                />
              </Flex>
              <Text
                color="grayDarkText"
                m={{ _: '2.7rem 0 0' }}
                fontSize={{ _: '1.8rem', md: '1.6rem' }}
                fontWeight={600}
              >
                Plans starting from
              </Text>
              <Text
                color={
                  typeof comparedCompanyStartingPlanPrice === 'string'
                    ? 'greenDarkBg'
                    : reviewshakeStartingPlanPrice < comparedCompanyStartingPlanPrice
                    ? 'red'
                    : 'greenDarkBg'
                }
                fontWeight={600}
                fontSize={{ _: '2.7rem', lg: '3.6rem' }}
                lineHeight={{ _: '1.25', lg: '1.3' }}
                m={{ _: '2.4rem 0 0' }}
                px={'2rem'}
                textAlign="center"
              >
                {typeof comparedCompanyStartingPlanPrice === 'string'
                  ? comparedCompanyStartingPlanPrice
                  : `$${comparedCompanyStartingPlanPrice}/month`}
              </Text>
            </Flex>
          </Flex>
          <BaseLink href="https://app.reviewshake.com/signup" external mx="auto" mt={{ _: 60 }}>
            Try Reviewshake for free
          </BaseLink>
        </Container>
      </Section>

      <Section backgroundColor="gray">
        <Container>
          <HeadingBase as="h2" maxWidth={{ _: 275, md: 'unset' }}>
            Reviewshake vs. {companyName}
          </HeadingBase>
          <Flex justifyContent={{ _: 'space-between', md: 'flex-end' }}>
            <Flex
              maxWidth={{ _: 140, md: 'unset' }}
              flex={{ _: 1, md: '0 1 25%', lg: '0 1 16%' }}
              p={{ md: '0 1.5rem' }}
            >
              <Image
                src="/assets/images/reviewshake-logo.svg"
                width={191}
                height={43}
                alt="Reviewshake logo"
              />
            </Flex>
            <Flex maxWidth={{ _: 110, md: 'unset' }} flex={{ _: 1, md: '0 1 25%', lg: '0 1 16%' }}>
              <Flex
                p={{ md: '0 1.5rem' }}
                flex={1}
                alignItems="center"
                maxHeight="43px"
                position="relative"
              >
                <Image
                  src={`/assets/images/comparison/${comparedCompanyLogo.src}`}
                  alt={comparedCompanyLogo.alt}
                  fill={true}
                  style={{ objectFit: 'contain' }}
                />
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection={{ _: 'column' }} mt={{ _: '1.8rem', md: '2.4rem' }}>
            {Object.entries(reviewshakeComparisonFeatures).map(
              ([sectionTitle, sectionItems], index) => {
                return (
                  <Fragment key={index}>
                    <Flex
                      borderRadius={6}
                      backgroundColor="#F0F0F0"
                      p={{ _: '1.2rem 1.6rem', md: '1.9rem 2.4rem' }}
                    >
                      <Text
                        color="black"
                        fontWeight={600}
                        fontSize={{ _: '1.6rem', md: '1.8rem' }}
                        lineHeight={{ _: '2.7rem' }}
                        m={0}
                      >
                        {sectionTitle}
                      </Text>
                    </Flex>
                    <Flex p={{ _: '0 1.6rem' }} flexDirection={{ _: 'column' }}>
                      {sectionItems.map((item, itemIndex) => {
                        const comparedCompanyValue =
                          comparedCompanyComparisonFeatures[
                            sectionTitle as keyof ComparisonFeaturesType
                          ][itemIndex].value;

                        return (
                          <Flex
                            key={itemIndex}
                            p={
                              itemIndex === sectionItems.length - 1
                                ? { _: '1rem 0 1.3rem', md: '1.4rem 0 2.4rem' }
                                : { _: '1rem 0', md: '1.4rem 0' }
                            }
                            flexDirection={{ _: 'column', md: 'row' }}
                            borderBottom={
                              itemIndex === sectionItems.length - 1
                                ? 'none'
                                : { _: '1px solid #E0E0E0', md: 'none' }
                            }
                          >
                            <Flex
                              alignItems="center"
                              mb={{ _: '1.3rem', md: 0 }}
                              flex={{ _: 1, md: '1 1 50%', lg: '1 1 68%' }}
                            >
                              <Box
                                flex={{ _: '0 0 12px', md: '0 0 15px' }}
                                mr={{ _: '8px', md: '11px' }}
                              >
                                <Info />
                              </Box>
                              <Text
                                m={0}
                                fontSize={{ _: '1.3rem', md: '1.6rem' }}
                                lineHeight={{ _: '2.1rem', md: '2.7rem' }}
                                fontWeight={500}
                                color="grayDarkText"
                              >
                                {item.title}
                              </Text>
                            </Flex>
                            <Flex
                              justifyContent={{ _: 'space-between', md: 'space-around' }}
                              alignItems="flex-start"
                              flex={{ _: 1, md: '1 1 50%', lg: '1 1 32%' }}
                              p={{ _: 0, md: '.5rem 0 0' }}
                            >
                              <Flex flex="0 1 50%" justifyContent="center">
                                {item.value ? (
                                  <FeatureCheck />
                                ) : (
                                  <Box position="relative" top={'-10px'} mb="-10px">
                                    <Text color="#CCCCCE" m={0}>
                                      --
                                    </Text>
                                  </Box>
                                )}
                              </Flex>

                              <Flex flex="0 1 50%" justifyContent="center">
                                {typeof comparedCompanyValue === 'string' && (
                                  <Text textAlign="center" m={0} fontSize={{ _: '1.3rem' }}>
                                    {comparedCompanyValue}
                                  </Text>
                                )}
                                {typeof comparedCompanyValue === 'boolean' &&
                                  (comparedCompanyValue ? (
                                    <FeatureCheck />
                                  ) : (
                                    <Box position="relative" top={'-10px'} mb="-10px">
                                      <Text color="#CCCCCE" m={0}>
                                        --
                                      </Text>
                                    </Box>
                                  ))}
                              </Flex>
                            </Flex>
                          </Flex>
                        );
                      })}
                    </Flex>
                  </Fragment>
                );
              }
            )}
          </Flex>
          <Box mt={{ _: '4rem', md: '6rem', lg: '8rem' }}>
            <BaseLink href="https://app.reviewshake.com/signup" external mx="auto">
              Try Reviewshake for free
            </BaseLink>
          </Box>
        </Container>
      </Section>

      <Section backgroundColor="white">
        <Container>
          <LearnAboutPricing />
        </Container>
      </Section>
    </>
  );
};

export default ComparisonPageLayout;
