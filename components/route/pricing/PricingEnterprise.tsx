import Container from '@/components/reusable/container/Container';
import PricingSingle from '@/components/reusable/pricing-single/PricingSingle';
import { faqEnterpriseData, pricingEnterpriseData } from './pricingData';
import Section from '@/components/reusable/section/Section';
import FaqSection from '@/components/reusable/faq-section/FaqSection';

type PricingEnterpriseProps = {
  isMonthly: boolean;
};

const PricingEnterprise = ({ isMonthly }: PricingEnterpriseProps) => {
  return (
    <>
      <Section backgroundColor="gray" pt={0}>
        <Container>
          <PricingSingle
            keyFeatures={pricingEnterpriseData.keyFeatures}
            tag={{
              title: pricingEnterpriseData.description,
              color: 'blue',
              bgColor: 'blueBg',
            }}
            price={{
              monthlyPrice: pricingEnterpriseData.monthlyPrice,
              monthlyPriceYearlyPayment: pricingEnterpriseData.monthlyPriceYearlyPayment,
              yearlyPrice: pricingEnterpriseData.yearlyPrice,
            }}
            isMonthly={isMonthly}
            tryFreeLink={pricingEnterpriseData.tryFreeLink}
          />
        </Container>
      </Section>
      <FaqSection faqItems={faqEnterpriseData} backgroundColor="white" />
    </>
  );
};

export default PricingEnterprise;
