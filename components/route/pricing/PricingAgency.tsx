import { Fragment } from 'react';
import Section from '@/components/reusable/section/Section';
import Container from '@/components/reusable/container/Container';
import Text from '@/components/reusable/text/Text';
import { faqAgencyDataPricing, pricingAgencyData } from './pricingData';
import { StyledTable } from './pricing.styles';
import Heading from '@/components/reusable/heading/Heading';
import {
  RowTitleTr,
  StyledSectionTableHeading,
  StyledTableValueRow,
  StyledTh,
} from '@/components/reusable/compare-plans-table/comparePlansTable.styles';
import FeatureCheck from '@/components/reusable/icons/FeatureCheck';
import PricingSingle from '@/components/reusable/pricing-single/PricingSingle';
import ContentImageSection from '@/components/reusable/content-image-section/ContentImageSection';
import FaqSection from '@/components/reusable/faq-section/FaqSection';

type PricingAgencyProps = {
  isMonthly: boolean;
};

const PricingAgency = ({ isMonthly }: PricingAgencyProps) => {
  return (
    <>
      <Section backgroundColor="gray" pt={0}>
        <Container>
          <PricingSingle
            keyFeatures={pricingAgencyData.keyFeatures}
            tag={{
              title: pricingAgencyData.description,
              color: 'orange',
              bgColor: 'orangeBg',
            }}
            price={{
              monthlyPrice: pricingAgencyData.monthlyPrice,
              monthlyPriceYearlyPayment: pricingAgencyData.monthlyPriceYearlyPayment,
              yearlyPrice: pricingAgencyData.yearlyPrice,
            }}
            isMonthly={isMonthly}
            tryFreeLink={pricingAgencyData.tryFreeLink}
          />
        </Container>
      </Section>
      <Section backgroundColor="white">
        <Container>
          <Heading
            as="h3"
            textAlign="center"
            fontSize={{ _: '3rem', md: '3.2rem', lg: '4.8rem' }}
            lineHeight={{ _: '4.05rem', md: '4.32re,', lg: '6.48rem' }}
            mb={{ _: '1.2rem' }}
            maxWidth={{ _: '300px', md: 'unset' }}
            mx={{ _: 'auto' }}
          >
            Agency features
          </Heading>
          <StyledTable>
            <tbody>
              {Object.entries(pricingAgencyData.agencyFeatures).map(([key, rows], index) => (
                <Fragment key={index}>
                  <tr>
                    <StyledTh colSpan={3} $displayOn="mobile">
                      {key}
                    </StyledTh>
                    <StyledTh colSpan={4} $displayOn="tablet-up">
                      {key}
                    </StyledTh>
                  </tr>
                  {Object.entries(rows).map((item, _index) => {
                    return (
                      <Fragment key={_index}>
                        <RowTitleTr>
                          <StyledSectionTableHeading colSpan={3}>
                            {item[0]}
                          </StyledSectionTableHeading>
                        </RowTitleTr>
                        <tr>
                          <StyledTableValueRow
                            $displayOn="tablet-up"
                            colSpan={3}
                            {...(_index === Object.entries(rows).length - 1 && {
                              $sectionLastRow: true,
                            })}
                            {...(_index === 0 && { $sectionFirstRow: true })}
                          >
                            {item[0]}
                          </StyledTableValueRow>
                          <StyledTableValueRow
                            key={index}
                            {...(_index === 0 && { $sectionFirstRow: true })}
                            {...(_index === Object.entries(rows).length - 1 && {
                              $sectionLastRow: true,
                            })}
                            {...(typeof item[1] === 'string' &&
                              item[1].startsWith('$') && { fontSize: '2.4rem' })}
                          >
                            {typeof item[1] === 'boolean' ? (
                              item[1] ? (
                                <FeatureCheck />
                              ) : (
                                <Text color="#CCCCCE" m={0}>
                                  --
                                </Text>
                              )
                            ) : (
                              item[1]
                            )}
                          </StyledTableValueRow>
                          <StyledTableValueRow
                            $displayOn="mobile"
                            {...(_index === Object.entries(rows).length - 1 && {
                              $sectionLastRow: true,
                            })}
                          ></StyledTableValueRow>
                          <StyledTableValueRow
                            $displayOn="mobile"
                            {...(_index === Object.entries(rows).length - 1 && {
                              $sectionLastRow: true,
                            })}
                          ></StyledTableValueRow>
                        </tr>
                      </Fragment>
                    );
                  })}
                </Fragment>
              ))}
            </tbody>
          </StyledTable>
        </Container>
      </Section>
      {pricingAgencyData.content.map((content, index) => (
        <ContentImageSection key={index} {...content} centered="all" />
      ))}
      <FaqSection faqItems={faqAgencyDataPricing} />
    </>
  );
};

export default PricingAgency;
